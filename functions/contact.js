/**
 * Cloudflare Pages Function — POST /contact
 * Reads form submission, sends email via Resend API.
 * Env var required: RESEND_API_KEY (set in Cloudflare Pages dashboard)
 */
export async function onRequestPost(context) {
  const { request, env } = context;

  /* Parse form data */
  let data;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      const fd = await request.formData();
      data = Object.fromEntries(fd.entries());
    }
  } catch {
    return json({ ok: false, error: 'Invalid request' }, 400);
  }

  /* Honeypot check */
  if (data._gotcha) return json({ ok: true }, 200);

  /* Turnstile verification */
  const turnstileSecret = env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = data['cf-turnstile-response'] || '';
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: turnstileSecret, response: token }),
    });
    const result = await verify.json();
    if (!result.success) return json({ ok: false, error: 'CAPTCHA failed' }, 400);
  }

  /* Basic validation */
  const name    = (data.name    || '').trim();
  const email   = (data.email   || '').trim();
  const message = (data.message || '').trim();
  if (!name || !email || !message) {
    return json({ ok: false, error: 'Missing required fields' }, 422);
  }

  /* Build email HTML */
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#1B2A4A;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;font-size:18px;letter-spacing:.05em;">
          New Inquiry — ASCANIA Website
        </h2>
      </div>
      <div style="background:#f5f0eb;padding:32px;border-radius:0 0 8px 8px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#8B96A8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;width:140px;">Name</td>
              <td style="padding:8px 0;color:#1B2A4A;font-size:15px;font-weight:600;">${esc(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#8B96A8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${esc(email)}" style="color:#2E7D8C;">${esc(email)}</a></td></tr>
          ${data.phone ? `<tr><td style="padding:8px 0;color:#8B96A8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Phone</td>
              <td style="padding:8px 0;color:#1B2A4A;">${esc(data.phone)}</td></tr>` : ''}
          ${data.project_type ? `<tr><td style="padding:8px 0;color:#8B96A8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">Project Type</td>
              <td style="padding:8px 0;color:#1B2A4A;">${esc(data.project_type)}</td></tr>` : ''}
          ${data.city ? `<tr><td style="padding:8px 0;color:#8B96A8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;">City</td>
              <td style="padding:8px 0;color:#1B2A4A;">${esc(data.city)}</td></tr>` : ''}
        </table>
        <div style="margin-top:24px;padding:20px;background:#fff;border-radius:6px;border-left:3px solid #2E7D8C;">
          <p style="color:#8B96A8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin:0 0 10px;">Message</p>
          <p style="color:#1B2A4A;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${esc(message)}</p>
        </div>
        <div style="margin-top:24px;text-align:center;">
          <a href="mailto:${esc(email)}" style="display:inline-block;background:#2E7D8C;color:#fff;padding:12px 28px;border-radius:6px;font-weight:600;font-size:14px;text-decoration:none;">
            Reply to ${esc(name)}
          </a>
        </div>
      </div>
      <p style="text-align:center;color:#8B96A8;font-size:12px;margin-top:16px;">
        ASCANIA Renovation &amp; Management · ascaniatampa.com
      </p>
    </div>
  `;

  /* Send via Resend */
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ ok: false, error: 'Server misconfiguration' }, 500);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from:     'ASCANIA Website <noreply@ascaniatampa.com>',
      to:       ['hello@ascaniatampa.com'],
      reply_to: email,
      subject:  `New inquiry from ${name} — ascaniatampa.com`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return json({ ok: false, error: 'Email delivery failed' }, 502);
  }

  return json({ ok: true }, 200);
}

/* ---- helpers ---- */
function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://www.ascaniatampa.com',
    },
  });
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

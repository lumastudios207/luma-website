import { Resend } from 'resend';

const prerender = false;
const resend = new Resend(undefined                              );
const RECAPTCHA_SECRET = undefined                                    ;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, phone, recaptchaToken } = body;
    if (!firstName?.trim() || !lastName?.trim()) {
      return new Response(JSON.stringify({ error: "Name required" }), { status: 400 });
    }
    if (!company?.trim()) {
      return new Response(JSON.stringify({ error: "Company required" }), { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return new Response(JSON.stringify({ error: "Valid email required" }), { status: 400 });
    }
    if (!phone?.trim()) {
      return new Response(JSON.stringify({ error: "Phone required" }), { status: 400 });
    }
    if (!recaptchaToken) {
      return new Response(JSON.stringify({ error: "reCAPTCHA required" }), { status: 400 });
    }
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: "reCAPTCHA failed" }), { status: 400 });
    }
    await resend.emails.send({
      from: "InstaSite Website <hello@lumastudios.co>",
      to: ["ivan@lumastudios.co"],
      replyTo: email.trim(),
      subject: `New InstaSite inquiry — ${firstName.trim()} ${lastName.trim()} / ${company.trim()}`,
      html: `
        <h2>New InstaSite Lead — Managed Websites</h2>
        <p><strong>Name:</strong> ${firstName.trim()} ${lastName.trim()}</p>
        <p><strong>Company:</strong> ${company.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <hr>
        <p><em>Source: /managed-websites landing page</em></p>
        <p><em>reCAPTCHA score: ${recaptchaData.score}</em></p>
      `
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("InstaSite contact error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

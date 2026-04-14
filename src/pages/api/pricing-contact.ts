export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const RECAPTCHA_SECRET = import.meta.env.RECAPTCHA_SECRET_KEY;

const PLAN_DETAILS: Record<string, { name: string; hours: number; price: number }> = {
  starter: { name: 'Starter', hours: 10, price: 950 },
  growth: { name: 'Growth', hours: 20, price: 1800 },
  scale: { name: 'Scale', hours: 30, price: 2550 },
  enterprise: { name: 'Enterprise', hours: 40, price: 3200 },
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, company, phone, website, plan, recaptchaToken } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), { status: 400 });
    }
    if (!company || typeof company !== 'string' || company.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Company required' }), { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return new Response(JSON.stringify({ error: 'Phone required' }), { status: 400 });
    }
    if (!website || typeof website !== 'string' || website.trim().length < 3) {
      return new Response(JSON.stringify({ error: 'Website required' }), { status: 400 });
    }
    if (!plan || typeof plan !== 'string' || !PLAN_DETAILS[plan]) {
      return new Response(JSON.stringify({ error: 'Invalid plan' }), { status: 400 });
    }
    if (!recaptchaToken) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA required' }), { status: 400 });
    }

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed' }), { status: 400 });
    }

    const planInfo = PLAN_DETAILS[plan];
    const formattedPrice = `$${planInfo.price.toLocaleString()}/week`;

    await resend.emails.send({
      from: 'Luma Studios Website <hello@lumastudios.co>',
      to: ['ivan@lumastudios.co'],
      subject: `Pricing inquiry — ${planInfo.name} (${planInfo.hours} hrs/wk) from ${name.trim()}`,
      html: `
        <h2>New Pricing Page Inquiry</h2>
        <p style="background:#FFFC10;padding:12px;border-radius:4px;color:#212121;font-weight:600;">
          Interested in: ${planInfo.name} — ${planInfo.hours} hrs/week — ${formattedPrice}
        </p>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Company:</strong> ${company.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <p><strong>Website:</strong> ${website.trim()}</p>
        <hr>
        <p><em>reCAPTCHA score: ${recaptchaData.score}</em></p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Pricing form error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};

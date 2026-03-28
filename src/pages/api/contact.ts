export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const RECAPTCHA_SECRET = import.meta.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, company, recaptchaToken } = body;

    // Server-side field validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 50) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }
    if (!company || typeof company !== 'string' || company.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Company required' }), { status: 400 });
    }
    if (!recaptchaToken) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA required' }), { status: 400 });
    }

    // Verify reCAPTCHA v3
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed' }), { status: 400 });
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'Luma Studios Website <hello@lumastudios.co>',
      to: ['ivan@lumastudios.co'],
      replyTo: email.trim(),
      subject: `Pricing Request from ${name.trim()} — ${company.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Company:</strong> ${company.trim()}</p>
        <hr>
        <p><em>reCAPTCHA score: ${recaptchaData.score}</em></p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};

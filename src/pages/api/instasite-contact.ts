export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const RECAPTCHA_SECRET = import.meta.env.RECAPTCHA_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, phone, plan, recaptchaToken } = body;

    // Validation
    if (!firstName?.trim() || !lastName?.trim()) {
      return new Response(JSON.stringify({ error: 'Name required' }), { status: 400 });
    }
    if (!company?.trim()) {
      return new Response(JSON.stringify({ error: 'Company required' }), { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), { status: 400 });
    }
    if (!phone?.trim()) {
      return new Response(JSON.stringify({ error: 'Phone required' }), { status: 400 });
    }
    if (!recaptchaToken) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA required' }), { status: 400 });
    }

    // Verify reCAPTCHA
    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${recaptchaToken}`,
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA failed' }), { status: 400 });
    }

    // Send email
    await resend.emails.send({
      from: 'InstaSite Website <hello@lumastudios.co>',
      to: ['ivan@lumastudios.co'],
      replyTo: email.trim(),
      subject: `New InstaSite inquiry — ${firstName.trim()} ${lastName.trim()} / ${company.trim()}`,
      html: `
        <h2>New InstaSite Lead — Managed Websites</h2>
        <p><strong>Name:</strong> ${firstName.trim()} ${lastName.trim()}</p>
        <p><strong>Company:</strong> ${company.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <p><strong>Plan:</strong> ${plan === 'growth' ? 'Growth' : 'Standard'}</p>
        <hr>
        <p><em>Source: /managed-websites landing page</em></p>
        <p><em>reCAPTCHA score: ${recaptchaData.score}</em></p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('InstaSite contact error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};

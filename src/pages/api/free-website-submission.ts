export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const RECAPTCHA_SECRET = import.meta.env.RECAPTCHA_SECRET_KEY;

const QUESTION_LABELS: Record<string, string> = {
  q1: 'Full name',
  q2: 'Business email',
  q3: 'Company name',
  q4: 'Current website URL',
  q5: 'Industry',
  q6: 'How the business serves customers',
  q7: 'Number of locations (current or planned)',
  q8: 'Current situation',
  q9: 'What is driving the change (current site)',
  q10: 'What the new website primarily needs to do',
  q11: 'Brand and content assets already owned',
  q12: 'Specific features needed',
  q13: 'Current state of online presence',
  q14: 'Reviews and reputation',
  q15: 'Post-launch growth services of interest',
  q16: 'Monthly add-on SEO budget',
  q17: 'Desired launch timing',
};

const escapeHtml = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const formatValue = (v: unknown): string => {
  if (Array.isArray(v)) return v.map((x) => `• ${escapeHtml(String(x))}`).join('<br>');
  const s = String(v ?? '').trim();
  return s ? escapeHtml(s) : '<em style="color:#888">—</em>';
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { q1, q2, recaptchaToken } = body;

    if (!q1 || typeof q1 !== 'string' || q1.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), { status: 400 });
    }
    if (!q2 || typeof q2 !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q2.trim())) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
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

    const rows = Object.entries(QUESTION_LABELS)
      .map(([key, label]) => `<p><strong>${label}:</strong><br>${formatValue(body[key])}</p>`)
      .join('');

    await resend.emails.send({
      from: 'Luma Studios Website <hello@lumastudios.co>',
      to: ['ivan@lumastudios.co'],
      replyTo: String(q2).trim(),
      subject: `Free Website request from ${String(q1).trim()} — ${String(body.q3 ?? '').trim()}`,
      html: `
        <h2>New Free Website Request</h2>
        ${rows}
        <hr>
        <p><em>reCAPTCHA score: ${recaptchaData.score}</em></p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Free website form error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};

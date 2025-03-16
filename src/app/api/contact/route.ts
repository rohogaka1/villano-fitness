import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key is not configured');
    }

    if (!process.env.CONTACT_FORM_TO_EMAIL || !process.env.CONTACT_FORM_FROM_EMAIL) {
      throw new Error('Email configuration is missing');
    }

    // Prepare email content
    const emailContent = {
      to: process.env.CONTACT_FORM_TO_EMAIL,
      from: process.env.CONTACT_FORM_FROM_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await sgMail.send(emailContent);

    // Send auto-reply to the user
    const autoReplyContent = {
      to: email,
      from: process.env.CONTACT_FORM_FROM_EMAIL,
      subject: 'Thank you for contacting Victoria Villano Fitness',
      text: `
Dear ${name},

Thank you for reaching out! I have received your message and will get back to you as soon as possible.

Best regards,
Victoria Villano
Victoria Villano Fitness
      `,
      html: `
<h2>Thank you for reaching out!</h2>
<p>Dear ${name},</p>
<p>I have received your message and will get back to you as soon as possible.</p>
<br>
<p>Best regards,<br>
Victoria Villano<br>
Victoria Villano Fitness</p>
      `,
    };

    await sgMail.send(autoReplyContent);

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'There was an error processing your request. Please try again.' },
      { status: 500 }
    );
  }
} 
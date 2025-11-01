import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { fromError } from 'zod-validation-error';

// Schema Zod per la validazione (duplicato da shared/schema.ts per autonomia)
const contactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Tipo ContactMessage
type ContactMessage = z.infer<typeof contactMessageSchema>;

// Funzione per inviare email (duplicata da server/email.ts per autonomia)
async function sendContactEmail(data: ContactMessage): Promise<void> {
  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #0D47A1; border-bottom: 2px solid #0D47A1; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <div style="margin-top: 20px;">
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #0D47A1;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
        <p>This message was sent from your portfolio contact form.</p>
      </div>
    </div>
  `;

  const textBody = `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This message was sent from your portfolio contact form.
  `;

  console.log("Contact form submission received:");
  console.log(`From: ${data.name} <${data.email}>`);
  console.log(`Message: ${data.message}`);

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("SMTP not configured. Email content logged above.");
    console.log("To enable email sending, set the following environment variables:");
    console.log("  SMTP_HOST, SMTP_USER, SMTP_PASS");
    console.log("  Optional: SMTP_PORT (default: 587), SMTP_SECURE (default: false), SMTP_FROM");
    console.log("\nEmail would be sent to: stevemaster478@gmail.com");
    console.log("Reply-To:", data.email);
    throw new Error("Email service is not configured. Please contact the site administrator to set up SMTP credentials.");
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: 'stevemaster478@gmail.com',
      subject: `Portfolio Contact: Message from ${data.name}`,
      text: textBody,
      html: emailBody,
      replyTo: data.email,
    });

    console.log("Email sent successfully to stevemaster478@gmail.com");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email. Please try again later or contact me directly.");
  }
}

// Handler principale della serverless function
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    // Validate request body
    const validatedData = contactMessageSchema.parse(req.body);
    
    // Send email
    await sendContactEmail(validatedData);
    
    return res.status(200).json({ 
      success: true, 
      message: "Message sent successfully" 
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    
    // Handle Zod validation errors
    if (error.name === "ZodError") {
      const validationError = fromError(error);
      return res.status(400).json({ 
        success: false, 
        message: validationError.message 
      });
    }
    
    // Handle other errors
    return res.status(500).json({ 
      success: false, 
      message: error.message || "Failed to send message. Please try again later." 
    });
  }
}


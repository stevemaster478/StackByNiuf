import type { VercelRequest, VercelResponse } from '@vercel/node';
import { contactMessageSchema } from '../shared/schema';
import { sendContactEmail } from '../server/email';
import { fromError } from 'zod-validation-error';

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


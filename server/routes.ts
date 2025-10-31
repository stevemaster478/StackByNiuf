import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactMessageSchema.parse(req.body);
      
      await sendContactEmail(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

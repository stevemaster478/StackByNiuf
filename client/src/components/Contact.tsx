import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactMessageSchema, type ContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<ContactMessage>({
    resolver: zodResolver(contactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (data: ContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactMessage) => {
    sendMessageMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "stevemaster478@gmail.com",
      href: "mailto:stevemaster478@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Villanova d'Asti, Piemonte, Italy",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nawfal-sassat",
      href: "https://linkedin.com/in/nawfal-sassat",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/stevemaster478",
      href: "https://github.com/stevemaster478",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            data-testid="input-contact-name"
                            disabled={sendMessageMutation.isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="your.email@example.com"
                            data-testid="input-contact-email"
                            disabled={sendMessageMutation.isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell me about your project or just say hi..."
                            className="min-h-40 resize-none"
                            data-testid="input-contact-message"
                            disabled={sendMessageMutation.isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    size="lg"
                    disabled={sendMessageMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {sendMessageMutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <p className="text-xs text-foreground/60 mt-6 text-center">
                I typically respond within 24 hours
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-md hover-elevate active-elevate-2 transition-colors">
                      <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground/60 uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p
                          className="text-sm text-foreground break-words"
                          data-testid={`text-contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        data-testid={`link-contact-${item.label.toLowerCase()}`}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      data-testid={`text-contact-${item.label.toLowerCase()}`}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">
                  Open to Opportunities
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  I'm currently open to freelance projects, full-time positions, and collaborative opportunities. 
                  Let's build something amazing together!
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base font-medium text-primary tracking-wide uppercase"
                data-testid="text-greeting"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                data-testid="text-name"
              >
                Nawfal Sassat
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80"
                data-testid="text-role"
              >
                Web Developer / Full Stack Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl"
              data-testid="text-tagline"
            >
              Innovation-driven developer focused on building performant, scalable digital solutions. 
              Specializing in modern web technologies with attention to security, scalability, and exceptional user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={scrollToContact}
                className="gap-2"
                data-testid="button-contact"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                data-testid="link-github"
              >
                <a
                  href="https://github.com/stevemaster478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                data-testid="link-linkedin"
              >
                <a
                  href="https://linkedin.com/in/nawfal-sassat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
              <div className="relative z-10 text-9xl font-bold text-primary/10 select-none">
                NS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

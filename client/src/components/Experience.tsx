import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Developed enterprise eCommerce and Delivery projects using Angular and Spring Boot",
    "Implemented secure authentication systems with Auth0, JWT, and Spring Security",
    "Coordinated and led remote technical teams across different time zones",
    "Optimized development workflow with modern tools like Vite, Tailwind CSS, and pnpm",
  ];

  const techStack = [
    "Angular",
    "Spring Boot",
    "Auth0",
    "JWT",
    "Spring Security",
    "Vite",
    "Tailwind CSS",
    "pnpm",
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3
                  className="text-2xl font-bold text-foreground"
                  data-testid="text-job-title"
                >
                  Full Stack Developer (Internship)
                </h3>
                <p
                  className="text-xl font-semibold text-primary"
                  data-testid="text-company-name"
                >
                  AGM Solutions
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-job-duration">February 2023 - July 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span data-testid="text-job-location">Torino, Italy</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-foreground/80"
                      data-testid={`text-achievement-${index}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-medium"
                      data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

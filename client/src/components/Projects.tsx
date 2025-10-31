import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Task Management SPA",
    description:
      "A modern single-page application for managing tasks and to-dos with an intuitive interface. Features include task creation, editing, filtering, and local storage persistence for seamless user experience.",
    techStack: ["React", "Redux", "LocalStorage", "Tailwind CSS"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "SnapNotes",
    description:
      "A Google Keep clone with full-stack implementation featuring note creation, organization, and cloud synchronization. Includes secure authentication and real-time updates for collaborative note-taking.",
    techStack: ["React", "Express", "MongoDB", "Auth0", "Node.js"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Portfolio Refactoring Project",
    description:
      "Complete rebuild of a graduation project using modern MERN stack architecture. Demonstrates best practices in full-stack development with improved performance, security, and user experience.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover-elevate transition-transform duration-300 hover:-translate-y-1">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div
                    className={`w-full aspect-video rounded-md bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background/10 via-transparent to-transparent" />
                    <ExternalLink className="h-12 w-12 text-foreground/20 relative z-10" />
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col">
                    <h3
                      className="text-xl font-semibold text-foreground"
                      data-testid={`text-project-title-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm text-foreground/70 leading-relaxed flex-1"
                      data-testid={`text-project-description-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium"
                        data-testid={`badge-project-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

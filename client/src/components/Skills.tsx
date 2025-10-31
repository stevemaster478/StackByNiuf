import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "Kotlin", "SQL", "HTML", "CSS", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    skills: [
      "React.js",
      "Redux",
      "Angular",
      "Spring Boot",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "MariaDB"],
  },
  {
    title: "DevOps & Tools",
    icon: Cog,
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "Maven",
      "pnpm",
      "Vite",
      "Tailwind CSS",
      "Auth0",
      "JWT",
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate transition-transform duration-300 hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3
                        className="text-lg font-semibold text-foreground"
                        data-testid={`text-skill-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-medium"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

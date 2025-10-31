import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p className="text-foreground/80" data-testid="text-about-intro">
                I'm a <strong className="text-foreground font-semibold">23-year-old Web Developer</strong> based in Villanova d'Asti, Piemonte, Italy. 
                My approach to development is driven by innovation, with a strong focus on creating performant and scalable digital solutions.
              </p>
              
              <p className="text-foreground/80" data-testid="text-about-focus">
                I specialize in building modern web applications with attention to three core principles: 
                <span className="text-foreground font-medium"> security, scalability, and exceptional user experience</span>. 
                My technical expertise spans both frontend and backend development, allowing me to create comprehensive full-stack solutions.
              </p>

              <p className="text-foreground/80" data-testid="text-about-collaboration">
                With experience in collaborative Agile environments, I bring strong leadership skills and a commitment to continuous improvement. 
                I thrive in team settings where I can contribute to building robust, enterprise-grade applications while constantly learning and evolving with new technologies.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/20">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Based in Villanova d'Asti, Italy
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

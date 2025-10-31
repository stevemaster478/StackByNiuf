import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/stevemaster478",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nawfal-sassat-91b70217b/",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:stevemaster478@gmail.com",
      icon: Mail,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              Nawfal Sassat
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Full Stack Web Developer passionate about building innovative digital solutions with modern technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors text-left hover-elevate active-elevate-2 px-2 py-1 rounded-md w-fit"
                  data-testid={`link-footer-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-muted hover-elevate active-elevate-2 transition-colors"
                    aria-label={link.label}
                    data-testid={`link-footer-social-${link.label.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p data-testid="text-copyright">
              © {currentYear} Nawfal Sassat. All rights reserved.
            </p>
            <p data-testid="text-built-with">
              Built with React, Express & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

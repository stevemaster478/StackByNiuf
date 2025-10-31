# Nawfal Sassat Portfolio

## Overview
Modern, minimal personal portfolio website for Nawfal Sassat, a Full Stack Web Developer based in Villanova d'Asti, Italy. Built with React, Express, and Tailwind CSS.

## Purpose
Showcase professional experience, technical skills, and projects with a clean, responsive design that works flawlessly in both light and dark modes.

## Recent Changes
- **October 31, 2025**: Initial portfolio implementation
  - Created all frontend components with exceptional visual polish
  - Implemented dark mode toggle with localStorage persistence
  - Built responsive design following design guidelines
  - Added smooth animations with Framer Motion
  - Created contact form with validation

## Project Architecture

### Frontend Stack
- **React** with TypeScript for UI components
- **Wouter** for routing
- **Tailwind CSS** for styling with custom design tokens
- **Framer Motion** for smooth animations
- **Shadcn UI** components for consistent design system
- **React Hook Form** with Zod validation for contact form
- **TanStack Query** for API state management

### Backend Stack
- **Express.js** for API server
- **Nodemailer** for contact form email functionality (to be implemented)
- **Zod** for schema validation

### Key Features
1. **Hero Section**: Name, title, professional links (GitHub, LinkedIn)
2. **About Section**: Professional profile showcasing innovation-driven approach
3. **Skills Section**: Categorized tech stack (Languages, Frameworks, Databases, DevOps)
4. **Experience Section**: AGM Solutions internship details
5. **Projects Section**: 3 featured projects with tech stacks
6. **Contact Section**: Functional form with email sending
7. **Dark Mode**: Full theme toggle with smooth transitions
8. **Responsive Design**: Mobile-first approach with breakpoints

### Design System
- **Primary Color**: #0D47A1 (blue) - configured as `--primary`
- **Font**: Inter (primary), Poppins (fallback)
- **Spacing**: Consistent use of Tailwind spacing units (4, 6, 8, 12, 16, 20, 24)
- **Animations**: Subtle fade-up on scroll, hover elevations, smooth transitions
- **Components**: Extensive use of Shadcn UI components (Card, Button, Badge, Form, etc.)

## File Structure

### Frontend Components
- `client/src/components/ThemeProvider.tsx` - Dark mode management
- `client/src/components/Header.tsx` - Navigation with theme toggle
- `client/src/components/Hero.tsx` - Main hero section
- `client/src/components/About.tsx` - Professional profile
- `client/src/components/Skills.tsx` - Technical skills grid
- `client/src/components/Experience.tsx` - Work experience
- `client/src/components/Projects.tsx` - Featured projects
- `client/src/components/Contact.tsx` - Contact form
- `client/src/components/Footer.tsx` - Footer with links
- `client/src/pages/Portfolio.tsx` - Main page combining all sections

### Backend
- `server/routes.ts` - API endpoints (contact form endpoint to be added)
- `shared/schema.ts` - Contact message schema with Zod validation

## User Preferences
- Clean, professional design with minimal distractions
- Primary color: #0D47A1 (blue)
- Inter font for professional typography
- Smooth animations that serve function, not decoration
- Mobile-responsive with mobile-first approach
- Dark mode as a first-class experience

## Contact Information
- **Email**: stevemaster478@gmail.com
- **LinkedIn**: linkedin.com/in/nawfal-sassat-91b70217b/
- **GitHub**: github.com/stevemaster478
- **Location**: Villanova d'Asti, Piemonte, Italy

## Email Configuration

The contact form is fully functional and will send emails when SMTP is configured. To enable email sending, set the following environment variables:

**Required:**
- `SMTP_HOST` - Your SMTP server hostname (e.g., smtp.gmail.com)
- `SMTP_USER` - Your SMTP username/email
- `SMTP_PASS` - Your SMTP password/app password

**Optional:**
- `SMTP_PORT` - SMTP port (default: 587)
- `SMTP_SECURE` - Use SSL/TLS (default: false)
- `SMTP_FROM` - From address (default: uses SMTP_USER)

**Without SMTP configuration**, the contact form will still work and log all submissions to the console with helpful setup instructions.

### Example SMTP Configurations

**Gmail:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Outlook/Office365:**
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

## Next Steps
- Configure SMTP settings for production email delivery
- Test contact form with real email sending
- Consider using Replit integrations (SendGrid, Resend) for easier email management

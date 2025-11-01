# 💼 Nawfal Sassat - Portfolio

<div align="center">

**Modern, minimal personal portfolio website for a Full Stack Web Developer**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-purple.svg)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.21-green.svg)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://vercel.com)

[Live Demo](#) • [Documentation](#documentation) • [Contact](#contact)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

A production-ready, fully responsive portfolio website showcasing professional experience, technical skills, and projects. Built with modern web technologies following industry best practices for performance, accessibility, and maintainability.

**Key Highlights:**
- ✨ Fully responsive design with mobile-first approach
- 🌓 Dark mode with smooth transitions and localStorage persistence
- 🎨 Professional UI with Shadcn UI components
- 📧 Functional contact form with email delivery via SMTP
- ⚡ Optimized performance with Vite and modern build tools
- 🚀 Deployed on Vercel with serverless functions

---

## ✨ Features

### 🎨 User Experience
- **Hero Section**: Professional introduction with social links
- **About Me**: Detailed professional profile and background
- **Skills**: Categorized technical skills (Languages, Frameworks, Databases, DevOps)
- **Experience**: Work history with detailed achievements
- **Projects**: Showcase of featured projects with tech stacks
- **Contact**: Fully functional contact form with validation

### 🛠️ Technical Features
- **Dark Mode**: Complete theme toggle with smooth transitions
- **Responsive Design**: Mobile-first approach, works on all devices
- **Form Validation**: Client-side validation with Zod schema
- **Email Integration**: SMTP-based email delivery via Nodemailer
- **Animations**: Smooth scroll animations with Framer Motion
- **Type Safety**: Full TypeScript coverage
- **Performance**: Optimized builds with Vite and esbuild

---

## 🧩 Tech Stack

### Frontend
| Category | Technologies |
|----------|-------------|
| **Framework** | React 18.3 + TypeScript 5.6 |
| **Build Tool** | Vite 7.1 |
| **Styling** | Tailwind CSS 3.4 + Tailwind Typography |
| **UI Components** | Shadcn UI (Radix UI primitives) |
| **Animations** | Framer Motion 11.18 |
| **Routing** | Wouter 3.3 |
| **Forms** | React Hook Form 7.55 + Zod 3.24 |
| **State Management** | TanStack Query 5.60 |
| **Icons** | Lucide React 0.453 + React Icons 5.4 |
| **Theme** | next-themes 0.4 |

### Backend
| Category | Technologies |
|----------|-------------|
| **Runtime** | Node.js 20+ |
| **Framework** | Express.js 4.21 |
| **Email** | Nodemailer 7.0 |
| **Validation** | Zod 3.24 + zod-validation-error |
| **Database** | Drizzle ORM 0.39 (PostgreSQL via Neon) |
| **Session** | Express Session 1.18 |
| **Authentication** | Passport.js 0.7 |

### Development Tools
| Tool | Purpose |
|------|---------|
| **TypeScript** | Type safety and developer experience |
| **ESBuild** | Fast bundling for server code |
| **Drizzle Kit** | Database migrations and schema management |
| **PostCSS** | CSS processing |
| **Cross-env** | Cross-platform environment variables |
| **TSX** | TypeScript execution for development |

### Infrastructure
- **Hosting**: Vercel (serverless functions)
- **Database**: Neon (PostgreSQL)
- **Email**: SMTP (Gmail/Outlook/SendGrid)

---

## 📁 Project Structure

```
Portfolio/
├── api/                      # Serverless functions (Vercel)
│   └── contact.ts            # Contact form API endpoint
├── client/                   # Frontend application
│   ├── public/              # Static assets
│   │   └── favicon.png
│   └── src/
│       ├── components/      # React components
│       │   ├── ui/          # Shadcn UI components
│       │   ├── About.tsx
│       │   ├── Contact.tsx
│       │   ├── Experience.tsx
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── Projects.tsx
│       │   ├── Skills.tsx
│       │   └── ThemeProvider.tsx
│       ├── hooks/           # Custom React hooks
│       ├── lib/             # Utilities and configurations
│       ├── pages/           # Page components
│       ├── App.tsx          # Main app component
│       ├── main.tsx         # Entry point
│       └── index.css        # Global styles
├── server/                   # Backend Express server
│   ├── email.ts             # Email service
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Database operations
│   └── vite.ts              # Vite middleware
├── shared/                   # Shared code (frontend + backend)
│   └── schema.ts            # Zod schemas
├── .env.example            # Environment variables template
├── components.json            # Shadcn UI configuration
├── drizzle.config.ts        # Drizzle ORM configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment configuration
└── vite.config.ts           # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **pnpm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/stevemaster478/StackByNiuf.git
   cd StackByNiuf
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure your environment variables (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000` (or the port shown in the terminal)

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build for production (frontend + backend) |
| `npm run start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes to database |

### Script Details

- **`dev`**: Runs the Express server with Vite middleware in development mode
- **`build`**: 
  - Builds the frontend with Vite (`dist/public`)
  - Bundles the backend with esbuild (`dist/index.js`)
- **`start`**: Runs the production build from `dist/`
- **`check`**: Validates TypeScript types without emitting files
- **`db:push`**: Applies Drizzle schema changes to the database

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

### Required (for Email Functionality)

```env
# SMTP Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

> **Note**: For Gmail, you must use an [App Password](https://myaccount.google.com/apppasswords), not your regular password.

### Optional

```env
# SMTP Optional Settings
SMTP_SECURE=false
SMTP_FROM="Portfolio Contact" <your-email@gmail.com>

# Database (if using Drizzle ORM)
DATABASE_URL=postgresql://user:password@host:port/database

# Node Environment
NODE_ENV=development

# Server Port (defaults to 5000)
PORT=5000
```

### Gmail App Password Setup

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Step Verification** (Security → 2-Step Verification)
3. Go to **App Passwords** (Security → App Passwords)
4. Generate a new app password for "Mail"
5. Use this 16-character password in `SMTP_PASS`

---

## 🚀 Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment with serverless functions.

1. **Push your code to GitHub**

2. **Import project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure environment variables**
   - Go to Project Settings → Environment Variables
   - Add all SMTP variables (see [Environment Variables](#environment-variables))
   - Select all environments (Production, Preview, Development)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

For detailed deployment instructions, see [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md).

---

## 🎨 Design System

### Colors

- **Primary**: `#0D47A1` (Blue)
- **Background**: System colors with dark mode support
- **Text**: High contrast for accessibility

### Typography

- **Primary Font**: Inter
- **Fallback**: Poppins
- **Code**: System monospace

### Spacing

Uses Tailwind's spacing scale (2, 4, 6, 8, 12, 16, 20, 24px) for consistency.

### Components

Built with **Shadcn UI**, a collection of accessible React components based on Radix UI primitives.

### Dark Mode

Fully implemented dark mode with:
- Smooth color transitions
- localStorage persistence
- System preference detection

For complete design guidelines, see [design_guidelines.md](./design_guidelines.md).

---

## 🛠️ Development

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting (if configured)

### Component Architecture

- **Functional Components**: All components use React hooks
- **TypeScript**: Full type coverage
- **Props Interfaces**: Explicit prop typing
- **Custom Hooks**: Reusable logic extraction

### Best Practices

- ✅ Mobile-first responsive design
- ✅ Semantic HTML5 structure
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ Error boundaries and graceful error handling
- ✅ Form validation (client-side + server-side)
- ✅ Performance optimization (code splitting, lazy loading)

---

## 📚 Documentation

- **[VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)**: Complete Vercel deployment guide
- **[design_guidelines.md](./design_guidelines.md)**: Design system and UI guidelines
- **[replit.md](./replit.md)**: Replit-specific documentation (if applicable)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow existing code style and patterns
- Add TypeScript types for all new code
- Update documentation if needed
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact

**Nawfal Sassat**  
Full Stack Web Developer

- 📧 **Email**: [stevemaster478@gmail.com](mailto:stevemaster478@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/nawfal-sassat-91b70217b](https://linkedin.com/in/nawfal-sassat-91b70217b/)
- 🐙 **GitHub**: [github.com/stevemaster478](https://github.com/stevemaster478)
- 📍 **Location**: Villanova d'Asti, Piemonte, Italy

---

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the amazing component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

<div align="center">

**Built with ❤️ by Nawfal Sassat**

⭐ If you find this project helpful, please consider giving it a star!

</div>

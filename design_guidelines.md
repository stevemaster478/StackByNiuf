# Design Guidelines: Nawfal Sassat Portfolio

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolio leaders like Linear (clean minimalism), Stripe (technical credibility), and Vercel (developer-focused aesthetics). This portfolio emphasizes professional restraint while showcasing technical excellence through thoughtful layout and typography.

## Core Design Principles

1. **Technical Minimalism**: Clean, distraction-free layouts that let content breathe
2. **Progressive Disclosure**: Information hierarchy that guides users naturally through your story
3. **Dark Mode Parity**: Both modes are first-class experiences, not afterthoughts
4. **Purposeful Motion**: Animations serve function, not decoration

---

## Typography System

**Primary Font**: Inter (fallback: Poppins)

### Hierarchy
- **Hero Title**: 4xl to 6xl (responsive), font-bold, tracking-tight
- **Section Headings**: 3xl to 4xl, font-bold, tracking-tight  
- **Subsection Headings**: xl to 2xl, font-semibold
- **Body Text**: base to lg, font-normal, leading-relaxed
- **Captions/Meta**: sm to base, font-medium, tracking-wide, uppercase for labels
- **Code/Technical**: Use monospace font (font-mono) for tech stack tags and code snippets

---

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of **2, 4, 6, 8, 12, 16, 20, 24** for consistency

### Container Strategy
- **Full-width sections**: w-full with inner max-w-7xl mx-auto px-4 to px-8
- **Content sections**: max-w-6xl mx-auto
- **Reading content**: max-w-4xl for text-heavy areas

### Section Padding
- Desktop: py-20 to py-32
- Tablet: py-16 to py-24
- Mobile: py-12 to py-16
- Inter-section spacing: mt-12 to mt-20

---

## Component Library

### Navigation
- **Fixed header**: Sticky navigation with backdrop-blur effect
- **Layout**: Flex justify-between with logo/name left, nav links center/right
- **Dark mode toggle**: Icon button (sun/moon) positioned in header
- **Mobile**: Hamburger menu transforming to full-screen overlay
- **Active state**: Underline or subtle indicator for current section

### Hero Section
- **Height**: 85vh to 90vh on desktop, natural height on mobile
- **Layout**: Asymmetric two-column on desktop (60/40 split)
  - Left: Name (hero title size), role subtitle, 2-3 line elevator pitch, CTA buttons (GitHub + LinkedIn as primary actions, Resume/Contact as secondary)
  - Right: Professional headshot or abstract geometric illustration representing coding/development
- **Background**: Subtle gradient or mesh pattern, very low opacity
- **Spacing**: Generous padding (p-12 to p-20) to create breathing room

### About Me Section
- **Layout**: Two-column on desktop (40/60 split)
  - Left: Section heading, decorative accent element
  - Right: Professional profile text in 2-3 paragraphs, max-w-3xl
- **Enhancement**: Pull quote or highlighted stat ("23 years old, innovation-driven developer")
- **Visual interest**: Subtle background pattern or shape

### Skills Section  
- **Layout**: Four-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- **Skill Category Cards**: 
  - Icon at top (Heroicons: code, server, database, cog for categories)
  - Category heading (Languages, Frameworks, Databases, DevOps)
  - List of technologies with subtle separators
  - Consistent card height with p-6 to p-8
- **Visual treatment**: Cards with subtle borders, hover lift effect (translate-y-1)

### Experience Section
- **Layout**: Single prominent card for AGM Solutions experience
- **Card structure**: 
  - Company name + role as heading
  - Duration + location as meta text
  - 4-5 bullet points of achievements with checkmark icons
  - Tech stack tags at bottom (inline-flex gap-2, pill-shaped badges)
- **Enhancement**: Timeline indicator on left edge or subtle company logo placeholder

### Projects Section
- **Layout**: Three-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Project Cards**: Substantial, feature-rich design
  - Project title (text-xl font-semibold)
  - 2-3 sentence description
  - Tech stack tags (flex-wrap, gap-2)
  - Image placeholder area (aspect-video, bg-gradient placeholder)
  - Dual CTA: "View Demo" + "See Code" buttons
  - Hover: Slight scale and shadow lift
- **Cards**: Equal height using min-h strategy, p-6 padding

### Contact Section
- **Layout**: Two-column on desktop (50/50 split)
  - Left: Contact form (name, email, message textarea)
  - Right: Contact information card with email, LinkedIn, GitHub, location info
- **Form design**:
  - Label above each input, text-sm font-medium
  - Inputs: p-3 to p-4, rounded borders, focus ring
  - Textarea: min-h-40
  - Submit button: Full-width on mobile, inline on desktop
- **Enhancement**: Response time expectation ("I typically respond within 24 hours")

### Footer
- **Layout**: Three-column grid (mobile stacks)
  - Left: Name + tagline
  - Center: Quick links (About, Skills, Projects, Contact)
  - Right: Social links with icons (GitHub, LinkedIn)
- **Bottom bar**: Copyright + "Built with React & Express" text
- **Spacing**: py-12 with max-w-7xl container

---

## Animations & Interactions

**Philosophy**: Minimal, purposeful motion only

### Approved Animations
- **Scroll reveal**: Subtle fade-up on section entry (Framer Motion variants)
- **Hover states**: Gentle scale (scale-105) and shadow on cards
- **Page transitions**: Smooth fade between route changes
- **Dark mode toggle**: Color transition with transition-colors duration-300

### Forbidden
- Parallax effects
- Continuous animations
- Scroll-jacking
- Excessive particle effects

---

## Responsive Breakpoints

- **Mobile**: < 768px - Single column, stacked layouts
- **Tablet**: 768px - 1024px - Two-column layouts where appropriate  
- **Desktop**: > 1024px - Full multi-column grids

### Mobile-Specific Adjustments
- Hero: Stack content vertically, image below text
- Navigation: Hamburger menu
- Skills/Projects: Single or two-column max
- Contact: Stack form and info vertically
- Reduce all padding by 30-40%

---

## Images

### Large Hero Image
**Yes** - Include professional headshot or abstract developer-themed illustration in hero section (right side on desktop, below text on mobile)

### Additional Images
- **Project thumbnails**: Placeholder gradients or screenshot mockups for each project card (aspect-ratio-video)
- **About section**: Optional secondary image or geometric accent element

### Image Treatment
- Rounded corners (rounded-lg to rounded-xl)
- Subtle shadow on project images
- For any buttons over images: backdrop-blur-md background with semi-transparent overlay

---

## Accessibility & Quality Standards

- Semantic HTML5 structure (header, nav, main, section, footer)
- ARIA labels for icon buttons and navigation
- Focus visible states on all interactive elements (focus:ring-2)
- Color contrast ratios meet WCAG AA in both light and dark modes
- Keyboard navigation support throughout
- Form labels properly associated with inputs

---

## Technical Implementation Notes

- All spacing uses Tailwind utilities exclusively (no custom CSS margins/padding)
- Dark mode: Implement with class-based strategy (dark:) for all components
- Persist dark mode preference in localStorage
- Form validation: Client-side with visual feedback before submission
- Smooth scroll behavior for anchor links (scroll-behavior: smooth)
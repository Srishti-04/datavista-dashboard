DataVista Dashboard

DataVista is a modular, interactive, and responsive dashboard built with Next.js, React, Tailwind CSS, ShadCN UI, Recharts, and TanStack Table. It provides advanced UI architecture, dynamic data visualization, and enterprise-grade data management.

Features
1. Advanced UI Architecture
Modular Component System: Components like buttons, avatars, and sidebars are installed individually to keep the codebase lean.
Radix UI Logic: Handles complex behaviors like keyboard navigation, ARIA attributes, and focus management.
Clean Conditional Styling: Uses a cn utility function for readable conditional Tailwind CSS classes.
2. Navigation & Layout
Persistent Sidebar: Collapsible groups, nested items, and action buttons with state saved in browser cookies.
Responsive Grid System: Adjusts the number of columns (1–4) based on screen size.
Sticky Navbar: Stays visible while scrolling with high z-index positioning.
3. Interactivity & Theming
Theme Toggling: Light, dark, and system modes using next-themes with CSS variable-based colors.
Interactive Overlays: Includes Sheets, Popovers, and Hover Cards for better UX.
Breadcrumbs: Tracks navigation paths across the dashboard, user lists, and profiles.
4. Data Visualization (Recharts)
Dynamic Charts: Bar, area, line, and pie charts for revenue, visitors, browser usage, and user activity.
Enhanced UX: Interactive tooltips and legends.
Themed Visuals: Chart colors linked to global CSS variables for automatic theme updates.
5. Data Management (TanStack Table)
Enterprise Features: Advanced sorting, pagination, and row selection for the Payments page.
Custom Cell Rendering: Currency formatting, color-coded status badges.
6. Form Handling & Validation
Schema-Based Validation: Using React Hook Form and Zod for real-time input validation.
Error Reporting: Custom error messages for invalid inputs like emails, usernames, and roles.
Tech Stack
Frontend: Next.js, React, Tailwind CSS
UI Components: ShadCN UI with Radix UI
Data Visualization: Recharts
Data Management: TanStack Table
Form Validation: React Hook Form + Zod
Installation
git clone <repository-url>
cd datavista-dashboard
npm install
npm run dev
Usage
Navigate through the sidebar to access dashboard sections.
Toggle themes via the settings icon.
Interact with charts to explore data.
Use the Payments table for sorting, pagination, and selection.

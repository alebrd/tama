<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:content-rules -->
# Content & Format Rules

**NEVER change the text content, copy, or visual formatting of any page unless the user explicitly instructs you to do so.**

This includes but is not limited to:
- Page headings, body copy, labels, and button text
- Page layout and component structure
- CSS styles and class names
- The order or hierarchy of elements

When performing technical tasks (e.g. adding i18n, refactoring routing, fixing bugs), you must preserve all existing content and formatting exactly as-is. Only translate, rewrite, or restructure content when the user explicitly asks for it.
<!-- END:content-rules -->

<!-- BEGIN:design-standards-rules -->
# Design Standards Rules

**ALWAYS read the relevant design standards document before making ANY visual or CSS change.**

- For changes to TAMA pages, components, or styles → read `TAMA_DESIGN_STANDARDS.md` first.
- For changes to SLOW pages, components, or styles → read `SLOW_DESIGN_STANDARDS.md` first.
- For changes that affect both (e.g. shared components like `Navbar`, `Footer`, `VenueGallery`) → read both documents.

These documents define the canonical values for:
- Colors and CSS variables
- Border radius (standard: `4px` everywhere, no exceptions)
- Typography scale and font usage
- Spacing, padding, and layout grid
- Component styles (buttons, cards, glass utilities)
- Transition timings
- Responsive breakpoints

**NEVER introduce a color, border-radius, font, spacing value, or animation that is not already defined in these documents** unless the user explicitly asks to extend the design system — in which case you must also update the relevant standards document.
<!-- END:design-standards-rules -->

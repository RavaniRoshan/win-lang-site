# WinScript Figma Design System Rules

These rules define how Figma-inspired and Figma-derived work should be implemented in this repository.

## Project Structure

- This project uses Next.js App Router with TypeScript.
- Route files live in `app/`.
- Shared presentation primitives live in `components/site/`.
- Typed product and documentation copy lives in `content/`.
- Static images and icons live in `public/`.

## Styling Rules

- Use CSS custom properties defined in `app/globals.css` for color, spacing, radius, and layout tokens.
- Prefer CSS Modules and co-located CSS for component and route styling.
- Do not add Tailwind or Tailwind utility classes.
- Never hardcode repeated colors when a site token exists.
- Keep the palette restrained: off-white background, deep slate text, muted neutrals, and a clay/wood accent family for technical surfaces.

## Component Conventions

- Reuse `components/site/` primitives before creating one-off route markup.
- Export components as named exports when multiple helpers live in a file and default exports only for route files.
- Keep components small, presentational, and typed.
- Client components are allowed only where browser APIs are required, such as reveal-on-scroll and clipboard interactions.

## Asset Handling

- Store local assets in `public/`.
- Use local SVG or image assets for hero media and decorative app icons where possible.
- If Figma MCP provides usable asset URLs for short-lived implementation work, convert them into durable local assets before relying on them in the site.

## Figma MCP Integration Rules

### Required flow

1. Run `get_design_context` for the exact node when the file exposes structured layers.
2. If the response is too large or flattened, use `get_metadata` and `get_screenshot` to recover hierarchy and visual rhythm.
3. Validate composition, spacing, and interaction tone against the screenshot before finishing implementation.

### Implementation Rules

- Treat Figma output as visual and structural guidance, not final code style.
- Translate Figma results into Next.js App Router components and CSS Modules.
- Reuse `components/site/` primitives instead of duplicating layouts.
- Use design tokens from `app/globals.css` and shared layout constraints from local CSS Modules.
- Respect the project's editorial, poster-like composition: sparse copy, large typography, full-bleed sections, and restrained motion.

### Flattened Screenshot Exception

- If a linked Figma node is a flattened image rather than decomposed layers, use the screenshot as a reference-first art direction source.
- In flattened cases, do not attempt pixel-perfect token extraction; preserve the visual hierarchy, breathing room, masonry cadence, and oversized footer treatment instead.

## Accessibility and Performance

- Maintain semantic heading order and keyboard-focusable controls.
- Preserve strong contrast for text over atmospheric backgrounds.
- Provide reduced-motion fallbacks for reveal and float animations.
- Favor lightweight CSS and native browser APIs over heavy animation dependencies for this site.

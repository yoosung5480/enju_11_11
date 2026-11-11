# Design

## Source of truth
Active · 2026-11-11. Surfaces: gift cover, D+day question, gift and letter reveal. Evidence: user request, existing React/Vite entry points and supplied gift image. No reference UI was supplied; illustration and layout are original.

## Brand
Personal, warm, quietly playful. Cream stationery, chocolate ink, muted red ribbon. Avoid generic app navigation, promotional language, and exposing the user's background briefing as page copy.

## Product goals
Cover → question → reveal only after answer 130. Show the full original coupon and a personal letter; allow saving the coupon. Static GitHub Pages deployment, no backend or external services.

## Personas and jobs
One recipient, 은주, opening a personal gift on a phone. Sender 유성 can edit the letter in source.

## Information architecture
One document, three React states. No routed URLs. Three-step progress indicator. Result includes the letter, full coupon, download, and restart.

## Design principles
One primary action per stage. Keep the gift hidden until the correct answer. Prioritize the letter's intimacy and the barcode's legibility over ornament.

## Visual language
Cream #f8f5ee; paper #fffcf6; chocolate #493b32; red #9e4338. System Korean sans-serif and local serif fallbacks. Fine rules, restrained shadows, original SVG illustration of chocolate sticks in an envelope. Short entrance animation; reduced-motion support.

## Components
Shared primary button, recipient label, card footer, progress indicator. Decorative cover illustration. A paper photo frame accompanies the illustration on the cover, with the sender's requested message beside it. A second photo appears at the beginning of the revealed letter. Both photos preserve their full original aspect ratios and embedded captions. Real question form with numeric keyboard and live error. Result, second photo, and coupon loaded only after success. Tokens in src/index.css; component styles in src/App.css.

## Accessibility
Semantic headings, form label, visible focus, keyboard submission, polite error announcements, descriptive gift image alternative, focus transfer between stages. No motion needed to understand or use the site.

## Responsive behavior
Desktop: two-column cover and reveal. Below 700px: stacked layouts. Support 320px and larger without horizontal overflow.

## Interaction states
Empty/wrong answers remain on the question. Exact trimmed answer 130 reveals the gift. Loading fallback for the reveal; coupon loading failures offer retry. Restart and reload return to the cover. No persistence. Quiz is a presentation gate, not access control.

## Content voice
Natural, affectionate Korean with short English stationery labels. User-supplied relationship background informs the mood only. Preserve the sender's personalized letter and quiz feedback. Cover message: “응주야, 내가 정말 빼빼로 데이를 이렇게 그냥 보낼줄알았어? 으이?!!”

## Implementation constraints
Existing React, TypeScript, Vite. No added dependencies. All work inside frontend. Relative asset base for repository subpaths. Preserve supplied coupon image. Verify typecheck/build, lint, and mobile/desktop browser flow.

## Open questions
None blocking. Sender can continue editing the letter in src/pages/GiftReveal.tsx.

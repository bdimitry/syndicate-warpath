# SyndiCate — Warpath Field Manual

React landing page in Russian, English, Arabic (RTL) and Vietnamese. Uses the supplied PNG alliance banner; no SVG assets or icon libraries.

## Development

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Translations and topic descriptions live in `src/content.js`. Language selection is stored locally and can be shared using `?lang=ru`, `?lang=en`, `?lang=ar` or `?lang=vi`. These query URLs work without server rewrite rules on GitHub Pages. Browser language is used on the first visit, falling back to English. Storage-disabled browsers are supported.

The army card opens the unit-upgrade guide at `?page=units&lang=ru` (also `en`, `ar`, `vi`). Other topic cards display a preparation notice. Guide translations and the alliance training content are in `src/units.js`, with rendering in `src/UnitsGuide.jsx`. The guide is based on the alliance's training letters of 27 October 2026; it preserves the rules on star tiers, identical copies, faction draws and coupons. Prices and rewards should be checked against the current game interface. Translations are editorial drafts; game-specific terminology should be reviewed by native-speaking alliance members.

## GitHub Pages

The parts guide is available at `?page=parts&lang=ru` (also `en`, `ar`, `vi`). It covers campaign bronze auto-disassembly, blueprint conversion, perfect crafting, role-based equipment, Mechanic bonuses, dismantling and blueprint sources. `src/parts.js` contains localized content and source links; `src/PartsGuide.jsx` renders it. Five player-provided JPEG screenshots illustrate conversion filters, the Conversion Store, dismantling, the Alliance Store and the Arena Store. Files are in `public/guides/parts/`, with localized numbered legends in `src/partScreenshots.js` and CSS markers rendered by `src/PartScreenshot.jsx`. Original image pixels are preserved, including Russian UI. An accessible native dialog enlarges each image; the original can be opened separately for native browser zoom. Marker positions never mirror in RTL. Prices and stock are account-specific examples, and distinct store currencies are not combined. The player's dismantling screen confirms 50% material return for gold ++, full material return for other parts, and no blueprint return. Campaign and crafting screens have not yet been supplied; those sections remain text-only. Do not invent perfect-crafting probabilities. Raw attachments are ignored; only these five explicitly selected images are published.

The resource calendar and Jurisdiction guide are available at `?page=events&lang=ru` (also `en`, `ar`, `vi`), linked from the homepage. Content and source links are in `src/events.js`; `src/EventsGuide.jsx` renders the guide and converts the six UTC stage boundaries to the browser time zone for the current date. It does not claim a live task rotation: community schedules conflict, so players are directed to the active in-game scoring conditions. Battle Honors is recommended for discretionary stockpiles because of additional officer statue rewards; necessary account progress is not blocked by this recommendation.

Push the project to the `main` branch of a GitHub repository, then select **Settings → Pages → Source → GitHub Actions**. The included workflow builds and deploys `dist`. Relative asset paths support repository subdirectories. Publication is not enabled until the repository and Pages are configured. Existing spreadsheets and notes are not included in the published build.

The only external runtime resource is Google Fonts; system fonts provide a fallback. The banner is served locally. No analytics or tracking is installed.

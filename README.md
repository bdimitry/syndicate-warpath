# SyndiCate — Warpath Field Manual

Every published page includes localized explanations beside its recommendations. `src/rationale.js` stores the reasoning in all four languages, and `src/Why.jsx` renders the shared explanation block. Coverage includes the homepage, all unit rules and coupon choices, each calendar day and Jurisdiction step, every parts section, and every research stage plus its three initial parallel tracks. `AGENTS.md` preserves this editorial requirement for future work. Explanations distinguish alliance strategy from game mechanics and avoid invented guarantees or savings.

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

Tank officer pairings are at `?page=tanks&lang=ru` (also `en`, `ar`, `vi`), linked from the homepage and unit guide. The latest alliance list has 14 pairs in seven categories: Light Tank F2P (3), Light Tank P2W (3), field MBT F2P (2), field MBT P2W (3), tanking MBT B2B F2P (1), tanking MBT B2B P2W (1), and MBT garrison (1, no spending category assigned). Field MBT P2W pairs confirmed by the user: Desert Jaeger + Haymaker; Catseye + Haymaker; Wings of Wanderlust + Lady Shadow. The earlier universal-baseline layout is superseded. Every pair and category explains its purpose and relevant skill conditions in all four languages. Artillery, aircraft and ships await compositions. Portraits are genuine PNG assets; source pages and dimensions are in `public/officers/SOURCES.json`. Shared identities are in `src/officers.js`. Card order does not assign commander/aide positions or rank alternatives.

The research progression guide is at `?page=research&lang=ru` (also `en`, `ar`, `vi`). It follows the user's alliance policy: fully complete Industry and Advanced Industry while following minimum City Honors prerequisites to the final node and unlocking level 120 for the target unit; then maximize all City Honors, unlock level 200, advance one needed unit type to its first target card, and balance relevant research afterward. Content lives in `src/research.js` and rendering in `src/ResearchGuide.jsx`. Level cap research is distinguished from actually leveling a unit. No node names, costs or screenshots are invented.

The parts guide is available at `?page=parts&lang=ru` (also `en`, `ar`, `vi`). It covers campaign bronze auto-disassembly, blueprint conversion, perfect crafting, role-based equipment, Mechanic bonuses, dismantling and blueprint sources. `src/parts.js` contains localized content and source links; `src/PartsGuide.jsx` renders it. Eight player-provided JPEG screenshots illustrate building locations, campaign Copper auto-disassembly, conversion selection and filters, the Conversion Store, dismantling, the Alliance Store and the Arena Store. Files are in `public/guides/parts/`, with localized numbered legends in `src/partScreenshots.js` and CSS markers rendered by `src/PartScreenshot.jsx`. Original image pixels are preserved, including Russian UI. An accessible native dialog enlarges each image; the original can be opened separately for native browser zoom. Marker positions never mirror in RTL. Prices and stock are account-specific examples, and distinct store currencies are not combined. The player's dismantling screen confirms 50% material return for gold ++, full material return for other parts, and no blueprint return. The campaign setting is confirmed at the bottom left of the main campaign screen, labeled Copper (Медь). Only the crafting screen remains missing. The supplied commander-energy screenshot is unrelated to this guide and is not published. Do not invent perfect-crafting probabilities. Raw attachments are ignored; only the eight relevant selected images are published.

The resource calendar and Jurisdiction guide are available at `?page=events&lang=ru` (also `en`, `ar`, `vi`), linked from the homepage. Content and source links are in `src/events.js`; `src/EventsGuide.jsx` renders the guide and converts the six UTC stage boundaries to the browser time zone for the current date. It does not claim a live task rotation: community schedules conflict, so players are directed to the active in-game scoring conditions. Battle Honors is recommended for discretionary stockpiles because of additional officer statue rewards; necessary account progress is not blocked by this recommendation.

Push the project to the `main` branch of a GitHub repository, then select **Settings → Pages → Source → GitHub Actions**. The included workflow builds and deploys `dist`. Relative asset paths support repository subdirectories. Publication is not enabled until the repository and Pages are configured. Existing spreadsheets and notes are not included in the published build.

The only external runtime resource is Google Fonts; system fonts provide a fallback. The banner is served locally. No analytics or tracking is installed.

### Infantry officer pairs

`?page=infantry&lang=ru` presents six SyndiCate compositions in Russian, English, Vietnamese and Arabic (RTL). Attacking F2P: Rogue Edge + Lady Shadow; Rogue Edge + Herald of Peace. Attacking P2W: Wings of Wanderlust + Rogue Edge. Tanking F2P: Everbloom + Angel of Light; Everbloom + Scavenger. Tanking P2W: The Arbitrator + Everbloom. Every pair has a skill-based explanation and relevant conditions. Categories and order follow the supplied alliance plan, not a tested ranking. Portrait provenance is in `public/officers/SOURCES.json`; assets are PNG.

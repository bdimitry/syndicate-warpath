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

Tank and Helicopter pairs are at `?page=tanks&lang=ru` (also `en`, `ar`, `vi`). There are 22 pairs in 13 categories: Light Tank F2P (4) / P2W (3), field MBT F2P (2) / P2W (3), B2B tanking MBT F2P (1) / P2W (1), MBT garrison (1), Helicopter F2P (2) / P2W (1), Helicopter Base Buffer garrison (1), Helicopter skill damage (1, no spending category supplied), B2B Super Heavy Tank F2P (1) / P2W (1). Each pair and category explains its job and skill conditions. Shared identities are in `src/officers.js`; PNG provenance is in `public/officers/SOURCES.json`. Stable group anchors use `#builds-<group-id>`, alongside existing numbered anchors.

The research progression guide is at `?page=research&lang=ru` (also `en`, `ar`, `vi`). It follows the user's alliance policy: fully complete Industry and Advanced Industry while following minimum City Honors prerequisites to the final node and unlocking level 120 for the target unit; then maximize all City Honors, unlock level 200, advance one needed unit type to its first target card, and balance relevant research afterward. Content lives in `src/research.js` and rendering in `src/ResearchGuide.jsx`. Level cap research is distinguished from actually leveling a unit. No node names, costs or screenshots are invented.

The parts guide is available at `?page=parts&lang=ru` (also `en`, `ar`, `vi`). It covers campaign bronze auto-disassembly, blueprint conversion, perfect crafting, role-based equipment, Mechanic bonuses, dismantling and blueprint sources. `src/parts.js` contains localized content and source links; `src/PartsGuide.jsx` renders it. Eight player-provided JPEG screenshots illustrate building locations, campaign Copper auto-disassembly, conversion selection and filters, the Conversion Store, dismantling, the Alliance Store and the Arena Store. Files are in `public/guides/parts/`, with localized numbered legends in `src/partScreenshots.js` and CSS markers rendered by `src/PartScreenshot.jsx`. Original image pixels are preserved, including Russian UI. An accessible native dialog enlarges each image; the original can be opened separately for native browser zoom. Marker positions never mirror in RTL. Prices and stock are account-specific examples, and distinct store currencies are not combined. The player's dismantling screen confirms 50% material return for gold ++, full material return for other parts, and no blueprint return. The campaign setting is confirmed at the bottom left of the main campaign screen, labeled Copper (Медь). Only the crafting screen remains missing. The supplied commander-energy screenshot is unrelated to this guide and is not published. Do not invent perfect-crafting probabilities. Raw attachments are ignored; only the eight relevant selected images are published.

The resource calendar and Jurisdiction guide are available at `?page=events&lang=ru` (also `en`, `ar`, `vi`), linked from the homepage. Content and source links are in `src/events.js`; `src/EventsGuide.jsx` renders the guide and converts the six UTC stage boundaries to the browser time zone for the current date. It does not claim a live task rotation: community schedules conflict, so players are directed to the active in-game scoring conditions. Battle Honors is recommended for discretionary stockpiles because of additional officer statue rewards; necessary account progress is not blocked by this recommendation.

Push the project to the `main` branch of a GitHub repository, then select **Settings → Pages → Source → GitHub Actions**. The included workflow builds and deploys `dist`. Relative asset paths support repository subdirectories. Publication is not enabled until the repository and Pages are configured. Existing spreadsheets and notes are not included in the published build.

The only external runtime resource is Google Fonts; system fonts provide a fallback. The banner is served locally. No analytics or tracking is installed.

### Infantry officer pairs

`?page=infantry&lang=ru` presents seven SyndiCate compositions in Russian, English, Vietnamese and Arabic (RTL). Attacking F2P: Rogue Edge + Lady Shadow; Rogue Edge + Herald of Peace. Attacking P2W: Wings of Wanderlust + Rogue Edge; Wings of Wanderlust + Lady Shadow. Tanking F2P: Everbloom + Angel of Light; Scavenger + Everbloom. Tanking P2W: The Arbitrator + Everbloom. Every pair has a skill-based explanation and relevant conditions. Categories and order follow the supplied alliance plan, not a tested ranking. Portrait provenance is in `public/officers/SOURCES.json`; assets are PNG.

### Artillery officer pairs

`?page=artillery&lang=ru` has 11 pairs in six categories: Howitzer B2B F2P (1) / P2W (2), Howitzer garrison (2), field Rocket Launcher F2P (2) / P2W (2), Anti-Tank Gun garrison (2). Garrison pairs have no spending category. Explanations cover role conditions, awakening, the one-Map-Grid range-bonus cap and Argent Flame’s Captain requirement. The submitted typo «Безморозный гром» is normalized to «Безмолвный гром» (Silent Thunder), and «Стальное ангел» to «Стальной ангел». Aircraft and ships still await compositions. OfficerGuide shares the layout with armor while retaining distinct content and routes.

### Construction priorities

`?page=construction&lang=ru` (also en/vi/ar) opens from the active Base Development card. Four priorities follow the submitted SyndiCate plan: Command Center, Engineering Center, required defense, relevant Barracks. Each includes a reason and checkpoint, followed by a repeatable cycle and source notes. The guide does not assert an unverified universal Wall/turret/Defense Center dependency or mandatory Barracks/airfield per level. Current in-game requirements and any displayed Build Index threshold take precedence; Lilith 3.0 posts are explicitly historical context. Production and research exceptions prevent the minimal-upgrade plan from blocking the core army or research guide.

The construction guide also covers three temporary freezes (Barracks, resource producers around 15–20 as a planning target, and conditional Storage/Radar) plus four acceleration decisions (Industry, forward production, applicable alliance effects/help, event alignment). All seven decisions explain the reason and exceptions in four languages. Barracks capacity/training effects are retained; no unverified months-long payback or hundreds-of-hours saving is promised. Production rushes and building-power gains are separate event conditions. Territory/help advice is conditional on the actual effect, timer and UI; reward contents and thresholds are checked in game.

### Officer card presentation

All 40 officer pairs use the shared `OfficerPair` card: two officer portraits around a raster unit illustration, gold border, context tags and red/blue loadout panels. Illustrative units are not unit-model or star-level requirements. Unassigned roles remain Officer 01/02 and skills/gear are explicitly unspecified. Two exact user references have confirmed loadouts: Super Heavy Tank B2B F2P Iron Cavalier + Dawn Anthem; field MBT F2P Lady Shadow + Madame Havoc. Those references do not create new pairings or apply to other categories. Lv 40 is shown as an example, not a minimum. Skill and gear names retain their English labels to identify the source items. Icon regions use CSS backgrounds from unchanged user JPEGs. Unit-art provenance and reference notes are in `public/guides/officers/SOURCES.json`. All interface labels and notes support ru/en/vi/ar, including RTL.

### Gridlock + Uncle · Base Buffer

Vanya Gefesto supplied the Helicopter garrison/Base Buffer pairing. Gridlock Architect leads with Shaped Charge, Best of the Best, and Painter Rocket Launcher Lv 40. Uncle Ivankov is aide with Armed to the Teeth, Explosive Expression, and Sky Eye Holographic Field Map Lv 40. Spending category is unspecified. The loadout uses the supplied English item names without invented icons; its Lv 40 labels are specified levels, not screenshot example levels. The claimed doubling is qualified: Base Normal Attack Resilience, Officer Skill Resilience and Dmg Resist are distinct stats; a universal x2 is not established. Existing reversed-order MBT garrison pair remains separate.

### Additional Vanya Gefesto loadouts

Seven unique authored builds are represented without duplicating repeated Base Buffer entries. `src/vanyaBuilds.js` stores six added/updated loadouts; Base Buffer remains in `src/baseBuffer.js`. Helicopter: Haymaker + Margarita (F2P, dodge/normal attacks, gear may be any level); Lady Shadow + Madame Havoc (skill damage, unspecified spending category, any gear level). Light Tank: Haymaker leads Lady Shadow; Haymaker leads Desert Jaeger; Desert Jaeger leads Steel Phoenix; Rapier leads Golden Eagle (F2P). Existing spending categories and unmentioned alternatives are retained. Explicit leader/aide order supersedes earlier unassigned order within the relevant category only. Margarita and Golden Eagle portraits are verified PNG assets. Names, trained skills and gear follow the submitted list, while guaranteed kills and universal doubled defenses are not asserted. Infantry and artillery pairings remain unchanged.

Infantry tanking loadouts supplied by Vanya Gefesto: Everbloom leads Angel of Light (Tribal Tenacity + Absolute Justice / Crimebuster + Full Suppression); Scavenger leads Everbloom (Tribal Tenacity + Absolute Justice / Crimebuster + Explosive Expression). Both use Bulwark Shield on the leader and Omni Keycard on the aide, listed at Lv 40. They fill existing tanking cards rather than add duplicates; the Scavenger pair order is updated. All four languages explain the group-support conditions and awakening requirement.

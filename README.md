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

Topic cards currently open an honest preparation notice; the landing page does not claim that guides have already been published. Translations are initial editorial drafts; game-specific terminology should be reviewed by native-speaking alliance members before guide publication.

## GitHub Pages

Push the project to the `main` branch of a GitHub repository, then select **Settings → Pages → Source → GitHub Actions**. The included workflow builds and deploys `dist`. Relative asset paths support repository subdirectories. Publication is not enabled until the repository and Pages are configured. Existing spreadsheets and notes are not included in the published build.

The only external runtime resource is Google Fonts; system fonts provide a fallback. The banner is served locally. No analytics or tracking is installed.

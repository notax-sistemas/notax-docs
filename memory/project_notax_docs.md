---
name: notax-docs project context
description: Setup and structure of the Notax API documentation site
type: project
---

Docusaurus 3 API docs site for notax.com.br, targeting deployment at docs.notax.com.br via GitHub Pages.

**Brand colors:** Blue `#3c6ec8` (primary — extracted from logo.png via pixel analysis), dark navy `#1a2e50` (headings/footer), Light grey `#F4F4F4`

- The correct logo is `logo.png` / `logotransparente.png` at the wwwroot root — NOT the Metronic SVGs in `media/logos/`

**Assets source:** Logo, favicon, and duotune icons come from `../tributogestor/TributoGestor.App/wwwroot/`

**Key decisions:**

- `routeBasePath: '/'` — docs served at root, no `/docs/` prefix
- Blog disabled
- `docusaurus-theme-openapi-docs` + `docusaurus-plugin-openapi-docs` for API rendering
- Generated API docs committed to git (not gitignored) to preserve manual edits like slug overrides
- CI build does NOT run `gen-api-docs all` — regenerate locally when spec changes: `npm run docusaurus gen-api-docs all`

**Adding a new API:**

1. Drop spec in `api-specs/<name>.json`
2. Add config entry in `docusaurus.config.ts` → plugins → `config`
3. Run `npm run docusaurus gen-api-docs all`
4. Import the generated sidebar in `sidebars.ts`
5. Add card to `src/pages/index.tsx`

**GitHub Pages:** CNAME = `docs.notax.com.br`, workflow at `.github/workflows/deploy.yml`

**Why:** Company wants Mintlify-like multi-API docs for notax.com.br products.

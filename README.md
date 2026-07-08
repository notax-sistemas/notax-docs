# notax-docs

Documentação das APIs da Notax, publicada em **[docs.notax.com.br](https://docs.notax.com.br)**.

Construído com [Docusaurus 3](https://docusaurus.io/), com as referências de API renderizadas a
partir de specs OpenAPI via [`docusaurus-plugin-openapi-docs`](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)
e `docusaurus-theme-openapi-docs`.

## Requisitos

- Node.js `>= 20` (a versão fixada está em [`.nvmrc`](./.nvmrc); use `nvm use`)
- npm (o repositório usa `package-lock.json` — **não** use yarn)

## Desenvolvimento local

```bash
npm ci        # instala as dependências
npm start     # servidor de desenvolvimento com hot reload em http://localhost:3000
```

## Build

```bash
npm run build   # gera o site estático em ./build
npm run serve   # serve o build localmente para conferência
```

## Qualidade de código

```bash
npm run typecheck     # checagem de tipos (tsc)
npm run lint          # ESLint
npm run format        # aplica formatação com Prettier
npm run format:check  # verifica formatação sem alterar arquivos
```

Um hook de `pre-commit` (Husky + lint-staged) roda Prettier e ESLint nos arquivos alterados
automaticamente a cada commit.

## Atualizar a documentação de uma API

Os arquivos gerados em `docs/notax-pay/` são **commitados no git** (para preservar ajustes
manuais, como overrides de slug). O CI **não** regenera esses arquivos — a regeneração é manual:

```bash
npm run clean-api   # remove os docs de API gerados
npm run gen-api     # regenera a partir dos specs em ./api-specs
```

Rode esses comandos sempre que o spec correspondente em `api-specs/` for atualizado.

## Adicionar uma nova API

1. Coloque o spec OpenAPI em `api-specs/<nome>.json`.
2. Adicione uma entrada em `docusaurus.config.ts` → `plugins` → `docusaurus-plugin-openapi-docs` → `config`.
3. Gere os docs: `npm run gen-api`.
4. Importe o sidebar gerado em `sidebars.ts`.
5. Adicione um card para a nova API em `src/pages/index.tsx`.

## Deploy

O deploy é automático: a cada push na branch `main`, o workflow
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) faz o build e publica no
GitHub Pages (domínio `docs.notax.com.br`, configurado em `static/CNAME`).

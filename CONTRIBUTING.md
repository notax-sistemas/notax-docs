# Guia de contribuição

Obrigado por contribuir com a documentação das APIs Notax! Este guia resume o fluxo de trabalho.

## Pré-requisitos

- Node.js na versão de [`.nvmrc`](./.nvmrc) (`nvm use`)
- npm (o projeto usa `package-lock.json` — **não** use yarn)

```bash
npm ci
```

## Fluxo de trabalho

1. Crie uma branch a partir de `main` seguindo o padrão `<tipo>/<descrição-curta>`
   (ex.: `feat/nova-api`, `fix/link-quebrado`, `docs/ajuste-intro`).
2. Faça suas alterações e valide localmente (veja abaixo).
3. Abra um Pull Request para `main`. O workflow de CI roda typecheck, lint, checagem de
   formatação e build — todos precisam passar.
4. Após o merge em `main`, o deploy para `docs.notax.com.br` é automático.

## Validação local

```bash
npm start          # servidor de desenvolvimento
npm run typecheck  # checagem de tipos
npm run lint       # ESLint
npm run format     # aplica formatação (Prettier)
npm run build      # build de produção (valida links quebrados)
```

Um hook de `pre-commit` (Husky + lint-staged) aplica Prettier e ESLint nos arquivos alterados
automaticamente. Não é necessário rodar manualmente antes de cada commit.

## Regenerar documentação de API

Os arquivos gerados em `docs/notax-pay/` são commitados no repositório e **não** são regenerados
pelo CI. Sempre que um spec em `api-specs/` mudar, regenere localmente e commite o resultado:

```bash
npm run clean-api   # remove os docs gerados
npm run gen-api     # regenera a partir dos specs
```

Para adicionar uma **nova** API, siga o passo-a-passo no [README](./README.md#adicionar-uma-nova-api).

## Organização da pasta `docs/`

A documentação segue o framework [Diátaxis](https://diataxis.fr/), separando conteúdo por objetivo do leitor:

```
docs/
├── intro.mdx        # landing da documentação
├── guias/           # conteúdo escrito à mão (tutoriais, how-to, conceitos)
└── notax-pay/       # referência de API GERADA — não editar à mão
```

### Escrevendo um guia

1. Crie um arquivo `.mdx` em `docs/guias/`. A sidebar é **autogerada** — o arquivo aparece
   automaticamente, sem precisar editar `sidebars.ts`.
2. Sempre inclua o frontmatter mínimo:

   ```yaml
   ---
   id: meu-guia
   title: Título do guia
   sidebar_label: Rótulo curto
   sidebar_position: 4 # controla a ordem na sidebar
   description: Uma frase para SEO e busca.
   ---
   ```

3. Quando `guias/` crescer, agrupe em subpastas (ex.: `guias/tutoriais/`) e adicione um
   `_category_.json` em cada uma para definir rótulo e ordem da categoria.

Não edite os arquivos em `docs/notax-pay/` — eles são regenerados a partir do spec (veja acima).

## Padrão de commits

Utilize [Conventional Commits](https://www.conventionalcommits.org/pt-br/):
`<tipo>: <descrição no imperativo>`. Tipos comuns: `feat`, `fix`, `docs`, `chore`, `ci`, `refactor`.

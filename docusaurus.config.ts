import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'Notax Docs',
  tagline: 'Documentação das APIs Notax',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.notax.com.br',
  baseUrl: '/',

  organizationName: 'notax',
  projectName: 'notax-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          notaxPay: {
            specPath: 'api-specs/notax-pay.json',
            outputDir: 'docs/notax-pay',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
              sidebarCollapsible: true,
              sidebarCollapsed: false,
            },
            showSchemas: false,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig: {
    image: 'img/notax-logo.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Notax',
        src: 'img/notax-logo.png',
        href: '/',
        height: 32,
      },
      items: [
        {
          type: 'dropdown',
          label: 'APIs',
          position: 'left',
          items: [
            {
              label: 'Notax Pay',
              to: '/notax-pay',
            },
          ],
        },
        {
          href: 'https://notax.com.br',
          label: 'notax.com.br',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'APIs',
          items: [
            {
              label: 'Notax Pay',
              to: '/notax-pay',
            },
          ],
        },
        {
          title: 'Empresa',
          items: [
            {
              label: 'Site',
              href: 'https://notax.com.br',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Notax. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'csharp', 'json', 'http'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

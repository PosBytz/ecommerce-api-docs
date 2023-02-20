// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Headless Commerce | PosBytz',
  tagline: 'API Documentation',
  url: 'https://posbytz.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PosBytz', // Usually your GitHub org/user name.
  projectName: 'ecommerce-api-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PosBytz Headless Commerce',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/posbytz/ecommerce-nuxt-demo',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: '/ecommerce-api-docs',
            label: 'Api Docs',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                href: 'https://posbytz.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/posbytz',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/posbytz/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/posbytz',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/posbytz-inc-05a909161/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/posbytz/?hl=en',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Help Center',
                href: 'https://help.posbytz.com/',
              },
              {
                label: 'Status Monitor',
                href: 'https://status.posbytz.com/en/',
              },
              {
                label: 'Contact Support',
                href: 'https://posbytz.com/contact-us/contact-support/',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bytize, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'ecommerce-api-docs',
        docsPluginId: 'classic',
        config: {
          ecommerce: {
            specPath: 'https://integrations-ecommerce.posbytz.com/api-json',
            outputDir: 'docs',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          }
        }
      },
    ]
  ],

  themes: ['docusaurus-theme-openapi-docs'],
};

module.exports = config;

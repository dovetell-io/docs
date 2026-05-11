// @ts-check

const config = {
  title: 'dovetell docs',
  tagline: 'Context governance for AI-assisted software teams.',
  url: 'https://docs.dovetell.io',
  baseUrl: '/',
  organizationName: 'dovetell-io',
  projectName: 'docs',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dovetell-io/docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'dovetell docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://dovetell.io',
          label: 'dovetell.io',
          position: 'right',
        },
        {
          href: 'https://github.com/dovetell-io/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'What is dovetell?',
              to: '/intro/what-is-dovetell',
            },
            {
              label: 'Templates',
              to: '/templates/overview',
            },
            {
              label: 'Docs architecture',
              to: '/architecture/docs-architecture',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Main site',
              href: 'https://dovetell.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dovetell-io/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} dovetell.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;

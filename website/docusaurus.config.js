// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const projectName = 'aws-data-solutions-framework'
const niceProjectName = 'AWS Data Solutions Framework'
const organization = 'awslabs'

const config = {
  title: niceProjectName,
  tagline: 'Accelerate building your data analytics solutions on AWS 🚀',
  url: 'https://' + organization + '.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/header-icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organization, // Usually your GitHub org/user name.
  projectName: projectName, // Usually your repo name.
  // deploymentBranch: 'main',
  githubHost: 'github.com',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          editUrl:
            'https://github.com/' + organization + '/' + projectName + '/blob/main/website/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          editUrl:
            'https://github.com/' + organization + '/' + projectName + '/blob/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  {
    navbar: {
      // title: 'AWS DSF',
      logo: {
        alt: niceProjectName + 'Logo',
        src: 'img/header-icon.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'solutions/index',
          position: 'left',
          label: 'Analytics solutions'
        },
        {
          type: 'doc',
          docId: 'constructs/index',
          position: 'left',
          label: 'Framework',
        },
        {
          href: 'https://github.com/' + organization + '/' + projectName,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Get Involved',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/' + organization + '/' + projectName,
            }
          ],
        },
      ],
      copyright: `Amazon.com, Inc. or its affiliates. All Rights Reserved`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    mermaid: {
      theme: { light: 'forest', dark: 'dark' },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;

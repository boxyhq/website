/** @type {import('@docusaurus/types').DocusaurusConfig} */

const copyright = '2021-present © BoxyHQ Inc.';

module.exports = {
  title: 'Enterprise Readiness made simple',
  tagline:
    'BoxyHQ helps startups enable enterprise features in any SaaS app with just a few lines of code. Integrate SAML, Audit Logs, Privacy Vault and Role Based Access in minutes. Open source and free.',
  url: 'https://boxyhq.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'boxyhq', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  // stylesheets: ['styles/dark-mode.css'],
  themeConfig: {
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/boxyhq/jackson">⭐ Star us on GitHub</a>',
      isCloseable: false,
    },
    image: 'img/website-preview-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BoxyHQ',
      logo: {
        alt: 'BoxyHQ',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        { to: '/blog', label: 'Blog' },
        { to: '/careers', label: 'Careers' },
        { to: '/team', label: 'Team' },
        { to: '/docs', label: 'Docs' },
        { to: '/guides', label: 'Guides' },
        {
          href: 'https://github.com/boxyhq',
          position: 'right',
          className: 'header-github-link',
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
              label: 'GitHub',
              href: 'https://github.com/boxyhq',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/uyb7pYt4Pa',
            },
            {
              label: 'Aviyel',
              href: 'https://aviyel.com/projects/11/boxyhq',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/boxyhq',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy & Cookies Policy',
              href: '/privacy.html',
            },
            {
              label: 'Terms',
              href: '/terms.html',
              target: '_blank',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Careers',
              href: '/careers',
            },
            {
              label: 'Team',
              href: '/team',
            },
          ],
        },
      ],
      copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription:
            'The BoxyHQ blog is an open discussion of thoughts from our team. We discuss everything from what SAML is to how we build certain elements of the products.',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-N9999D3', // GTM Container ID
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'careers',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'careers',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './careers',
        blogTitle: 'Careers',
        blogDescription:
          'Join us on our mission to help startups simplify the development of compliance and data security-related features in their products. Check out our open roles.',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars_guides.js'),
      },
    ],
    ['@cmfcmf/docusaurus-search-local', {}],
  ],
};

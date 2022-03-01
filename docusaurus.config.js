/** @type {import('@docusaurus/types').DocusaurusConfig} */

const copyright = '© BoxyHQ Inc';

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
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BoxyHQ',
      logo: {
        alt: 'BoxyHQ',
        src: 'img/logo.png',
      },
      items: [
        { to: '/blog', label: 'Blog' },
        { to: '/careers', label: 'Careers' },
        { to: '/team', label: 'Team' },
        { to: '/docs', label: 'Docs' },
        {
          href: 'https://github.com/boxyhq',
          label: 'GitHub',
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
              label: 'Discord',
              href: 'https://discord.gg/uyb7pYt4Pa',
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
              label: 'Cookies Policy',
              href: '/cookies.html',
              target: '_blank',
            },
            {
              label: 'Privacy Policy',
              href: '/privacy.html',
              target: '_blank',
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
          blogDescription: 'Enterprise readiness from BoxyHQ',
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
        blogDescription: 'Join us at BoxyHQ',
      },
    ],
  ],
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Enterprise Readiness made simple',
  tagline:
    'Boxy helps startups enable enterprise features in any SaaS app with just a few lines of code. Integrate SAML, Audit Logs, Privacy Vault and Role Based Access in minutes. Open source and free.',
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
      disableSwitch: true,
    },
    navbar: {
      title: 'Boxy',
      logo: {
        alt: 'Boxy',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://github.com/boxyhq',
          label: 'GitHub',
          position: 'right',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
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
              label: 'Cookie Policy',
              href: '/cookie.html',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Boxy.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/boxyhq/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/boxyhq/website/edit/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Boxy.`,
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
  ],
};

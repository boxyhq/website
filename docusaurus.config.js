const copyright = '2021-present © BoxyHQ Inc.';
import { themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BoxyHQ',
  tagline:
    'BoxyHQ helps startups enable enterprise features in any SaaS app with just a few lines of code. Integrate SAML, Audit Logs, Privacy Vault and Role Based Access in minutes. Open source and free.',
  url: 'https://boxyhq.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'boxyhq', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  scripts: [],
  // stylesheets: ['styles/dark-mode.css'],
  themeConfig: {
    prism: {
      theme: themes.dracula,
      additionalLanguages: ['php'],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    announcementBar: {
      id: 'announcement-bar',
      content:
        '<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/boxyhq/jackson">⭐ Star SAML Jackson on GitHub</a>',
      isCloseable: false,
    },
    image: 'images/website-preview-image.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'BoxyHQ',
      logo: {
        alt: 'BoxyHQ',
        width: '32px',
        height: '32px',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          label: 'Products',
          type: 'dropdown',
          items: [
            {
              to: '/products/overview',
              label: 'Overview',
            },
            {
              to: '/llm-vault',
              label: 'LLM Vault',
            },
            {
              to: '/enterprise-sso',
              label: 'Enterprise SSO',
            },
            {
              to: '/identity-federation-proxy',
              label: 'Identity Federation',
            },
            {
              to: '/directory-sync',
              label: 'Directory Sync',
            },
            {
              to: '/audit-logs',
              label: 'Audit Logs',
            },
            {
              to: '/privacy-vault',
              label: 'Privacy Vault',
            },
            {
              href: 'https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=main-nav',
              label: 'SaaS Sign up',
            },
            {
              href: 'https://github.com/boxyhq/saas-starter-kit',
              label: 'SaaS Starter Kit',
            },
          ],
        },
        {
          label: 'Solutions',
          type: 'dropdown',
          items: [
            {
              to: '/solutions/ai-security',
              label: 'AI Security',
            },
            {
              to: '/solutions/enterprise-readiness',
              label: 'Enterprise Readiness',
            },
            {
              to: '/solutions/identity-federation',
              label: 'Identity Federation',
            },
          ],
        },
        {
          label: 'Resources',
          type: 'dropdown',
          items: [
            { to: '/docs', label: 'Docs' },
            { to: '/sso-dsync-api', label: 'SSO & DSync API' },
            { to: '/audit-logs-api', label: 'Audit Logs API' },
            { to: '/guides', label: 'Guides' },
            {
              to: '/blog',
              label: 'Blog',
            },
            {
              to: '/success-stories',
              label: 'Success Stories',
            },
            {
              href: 'https://mocksaml.com',
              label: 'Mock SAML',
            },
            {
              href: 'https://awesome-oss-devsec.boxyhq.com',
              label: 'DevSec Tools',
            },
            {
              to: '/developer-first-security-week',
              label: 'Events',
            },
          ],
        },

        { to: '/pricing', label: 'Pricing' },
        {
          label: 'Company',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              to: '/contact',
              label: 'Contact Us',
            },
            {
              to: '/about',
              label: 'About',
            },
            {
              to: '/pledge',
              label: 'Pledge',
            },
            {
              to: '/careers',
              label: 'Careers',
            },
          ],
        },
        {
          to: 'https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=main-nav',
          label: 'Sign Up',
          position: 'right',
        },
        {
          href: 'https://github.com/boxyhq/jackson',
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
              href: 'https://github.com/boxyhq/jackson',
            },
            {
              label: 'Discord',
              href: 'https://discord.boxyhq.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/boxyhq',
            },
            {
              label: 'OSS Friends',
              href: 'https://boxyhq.com/oss-friends',
            },
            {
              label: 'Developer-First Security Week',
              href: 'https://boxyhq.com/developer-first-security-week',
            },
            {
              label: 'SaaS Product Hunt Launch',
              href: '/saas-producthunt',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/boxyhq',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/boxyhq',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/boxyhq',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy & Cookies Policy',
              href: 'https://boxyhq.com/privacy.html',
            },
            {
              label: 'Terms',
              href: 'https://boxyhq.com/terms.html',
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
            'The BoxyHQ blog is where our team shares our thoughts and ideas about everything from our products to industry news and insights. We also welcome guest posts so please do get in touch if you have any thoughts you would like to share on our blog.',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright,
          },

          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 5,
          postsPerPage: 'ALL',
          archiveBasePath: null,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      // https://getcanary.dev/docs/local/integrations/docusaurus#configuration
      require.resolve('@getcanary/docusaurus-theme-search-pagefind'),
      {
        styles: {
          '--canary-color-primary-c': 0.015,
          '--canary-color-primary-h': 200,
        },
        includeRoutes: ['**/*'],
        excludeRoutes: ['/{sso-dsync-api,audit-logs-api}/**'],
        tabs: [
          { name: 'All', pattern: '**/*' },
          { name: 'Docs', pattern: '**/{docs,guides}/**' },
          {
            name: 'Pages',
            pattern: '!**/{docs,guides,blog,success-stories}/**',
          },
          { name: 'Blog', pattern: '**/{blog,success-stories}/**' },
        ],
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
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars_guides.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'success-stories',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'success-stories',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './success-stories',
        blogTitle: 'Success Stories',
        blogDescription: '',
        archiveBasePath: null,
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/jackson/admin-ui',
            to: '/docs/admin-portal/enterprise-sso',
          },
          {
            from: '/docs/directory-sync/admin-ui',
            to: '/docs/admin-portal/directory-sync',
          },
          {
            from: '/docs/jackson/saml-flow',
            to: '/docs/jackson/sso-flow',
          },
          {
            from: '/docs/jackson/configure-saml-idp',
            to: '/docs/jackson/sso-providers',
          },
          {
            from: '/docs/jackson/deploy/pre-loaded-configuration',
            to: '/docs/jackson/deploy/pre-loaded-connections',
          },
          {
            from: '/success-stories/unosecur-leverages-boxyhqs-security-building-blocks-for-enterprise-peace-of-mind',
            to: '/success-stories/how-boxyhq-solutions-drive-business-efficiency-and-security-unosecur',
          },
          {
            from: '/enterprise-readiness',
            to: '/solutions/enterprise-readiness',
          },
          {
            from: '/identity-federation',
            to: '/solutions/identity-federation',
          },
          {
            from: '/team',
            to: '/about',
          },
        ],
      },
    ],
    './plugins/fetch-oss-friends',
    [
      './plugins/custom-scalar.js',
      {
        id: 'sso-dsync-api',
        label: 'SSO & DSync API',
        route: '/sso-dsync-api',
        configuration: {
          spec: {
            url: 'https://raw.githubusercontent.com/boxyhq/jackson/release/swagger/swagger.json',
          },
        },
      },
    ],
    [
      './plugins/custom-scalar.js',
      {
        id: 'audit-logs-api',
        label: 'Audit Logs API',
        route: '/audit-logs-api',
        configuration: {
          spec: {
            url: 'https://raw.githubusercontent.com/retracedhq/retraced/release/swagger.json',
          },
        },
      },
    ],
  ],
};

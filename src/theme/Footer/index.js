import React from 'react';

import { useThemeConfig } from '@docusaurus/theme-common';

import Logo from '../../components/Logo';

import './footer.css';

const Footer = () => {
  const { footer } = useThemeConfig();
  const currentYear = new Date().getFullYear();

  if (!footer) {
    return null;
  }

  const { copyright, links, logo, style } = footer;

  return (
    <footer className="page-footer">
      <div className="girdle page-footer-main">
        <Logo />
        <div className="page-footer-links">
          <div className="page-footer-link-group">
            <h4 className="page-footer-link-group-title">Products</h4>
            <nav>
              <ul className="reset-list">
                <li>
                  <a href="/enterprise-sso">Enterprise SSO</a>
                </li>
                <li>
                  <a href="/directory-sync">Directory Sync</a>
                </li>
                <li>
                  <a href="/audit-logs">Audit Logs</a>
                </li>
                <li>
                  <a href="/privacy-vault">Data Privacy Vault</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="page-footer-link-group">
            <h4 className="page-footer-link-group-title">Community</h4>
            <nav>
              <ul className="reset-list">
                <li>
                  <a href="https://boxyhq.com/oss-friends" rel="external">
                    OSS Friends
                  </a>
                </li>
                <li>
                  <a href="/developer-first-security-week">
                    Developer First Security Week
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="page-footer-link-group">
            <h4 className="page-footer-link-group-title">Company & Legal</h4>
            <nav>
              <ul className="reset-list">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="page-footer-link-group">
            <h4 className="page-footer-link-group-title">Open Source</h4>
            <nav>
              <ul className="reset-list">
                <li>
                  <a href="https://github.com/boxyhq/jackson" rel="external">
                    SAML Jackson
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/retracedhq/retraced"
                    rel="external"
                  >
                    Retraced
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/boxyhq/saas-starter-kit"
                    rel="external"
                  >
                    SaaS Starter Kit
                  </a>
                </li>
                <li>
                  <a
                    href="/https://github.com/boxyhq/awesome-oss-devsec"
                    rel="external"
                  >
                    Awesome DevSec Tools
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <ul className="reset-list social-links">
        <li>
          <a
            className="base-icon-pseudo icon-github"
            href="https://github.com/boxyhq"
            rel="external"
          >
            <span className="visually-hidden">Contribute on GitHub</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-discord"
            href="https://discord.boxyhq.com/"
            rel="external"
          >
            <span className="visually-hidden">
              Help and find support on Discord
            </span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-mastodon"
            href="https://hachyderm.io/@boxyhq"
            rel="external me"
          >
            <span className="visually-hidden">Follow us on Mastodon</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-youtube"
            href="https://www.youtube.com/channel/UCRx3EWQL1l07MTgtDHx5IMA"
            rel="external"
          >
            <span className="visually-hidden">Watch and learn on YouTube</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-linkedin"
            href="https://www.linkedin.com/company/boxyhq/"
            rel="external"
          >
            <span className="visually-hidden">Connect with us on LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-x"
            href="https://twitter.com/boxyhq"
            rel="external"
          >
            <span className="visually-hidden">Follow us on X</span>
          </a>
        </li>
      </ul>
      <p className="copyright">{currentYear} © BoxyHQ Inc.</p>
    </footer>
  );
};

export default React.memo(Footer);

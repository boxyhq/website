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
                  <a href="/llm-vault">LLM Vault</a>
                </li>
                <li>
                  <a href="/enterprise-sso">Enterprise SSO</a>
                </li>
                <li>
                  <a href="/identity-federation-proxy">Identity Federation</a>
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
                  <a href="/oss-friends">OSS Friends</a>
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
                  <a href="/contact">Contact Us</a>
                </li>
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
                  <a
                    href="https://github.com/boxyhq/jackson"
                    rel="external"
                    target="_blank"
                  >
                    SAML Jackson
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/retracedhq/retraced"
                    rel="external"
                    target="_blank"
                  >
                    Retraced
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/boxyhq/saas-starter-kit"
                    rel="external"
                    target="_blank"
                  >
                    SaaS Starter Kit
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/boxyhq/awesome-oss-devsec"
                    rel="external"
                    target="_blank"
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
            rel="external noopener noreferrer"
            target="_blank"
          >
            <span className="visually-hidden">Contribute on GitHub</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-discord"
            href="https://discord.boxyhq.com/"
            rel="external noopener noreferrer"
            target="_blank"
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
            rel="external me noopener noreferrer"
            target="_blank"
          >
            <span className="visually-hidden">Follow us on Mastodon</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-youtube"
            href="https://www.youtube.com/channel/UCRx3EWQL1l07MTgtDHx5IMA"
            rel="external noopener noreferrer"
            target="_blank"
          >
            <span className="visually-hidden">Watch and learn on YouTube</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-linkedin"
            href="https://www.linkedin.com/company/boxyhq/"
            rel="external noopener noreferrer"
            target="_blank"
          >
            <span className="visually-hidden">Connect with us on LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="base-icon-pseudo icon-x"
            href="https://twitter.com/boxyhq"
            rel="external noopener noreferrer"
            target="_blank"
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

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import withBaseUrl from "@docusaurus/withBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>SAML</>,
    imageUrl: "img/shield-alt-solid.svg",
    description: (
      <>
        Add single sign on authentication into your product. Supports most identity providers via SAML 2.0
      </>
    )
  },
  {
    title: <>Audit Logs</>,
    imageUrl: "img/clipboard-list-solid.svg",
    description: (
      <>
        Add audit logs into your product with ease. Allow your customers to send security related events to their SIEM
      </>
    )
  },
  {
    title: <>Privacy Vault</>,
    imageUrl: "img/key-solid.svg",
    description: (
      <>
        Protect your customers sensitive data by safely encrypting it in a Privacy vault. Add policies to govern access to the protected data
      </>
    )
  },
  {
    title: <>Role Based Access and Permissions</>,
    imageUrl: "img/user-lock-solid.svg",
    description: (
      <>
        Add roles, groups and permissions into your product using a flexible schema. Query the schema at runtime in your product to enforce Role Based Access Control
      </>
    )
  },
  {
    title: <>Directory Sync</>,
    imageUrl: "img/sync-solid.svg",
    description: (
      <>
        Add Directory Sync support into your product to provision and de-provision users. Supports the SCIM protocol
      </>
    )
  },
  {
    title: <>(coming soon)</>,
    imageUrl: "img/ellipsis-h-solid.svg",
    description: (
      <>
        Admin Portal, Security Status Page, Compliance Monitoring, many more.
        Contact us if you have any specific Enterprise features in mind.
      </>
    )
  }
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Boxy helps startups to enable enterprise features in any SaaS app with just a few lines of code"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to="mailto:hello@boxyhq.com"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames("col col--4", styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                        <br/>
                        <br/>
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

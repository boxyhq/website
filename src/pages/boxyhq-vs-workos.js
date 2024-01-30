import React from 'react';
import Layout from '@theme/Layout';

import SectionLayout from '../components/SectionLayout';
import { IconNo, IconYes } from '../components/Pricing/Icons';

const title = 'BoxyHQ vs WorkOS';
const description =
  'BoxyHQ is a flexible, secure, open-source alternative to WorkOS that brings enterprise readiness capabilities to your SaaS applications. It integrates with your tech stack no matter how bespoke.';

const AuditLogs = () => {
  return (
    <Layout title={title} description={description}>
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--12">
            <div className="col-demo">
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                }}
              >
                <h1 className="hero__title">{title}</h1>
              </div>
              <p className="hero__subtitle margin-top--lg">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className="page__section">
        <div className="container">
          <div
            className="row"
            style={{
              justifyContent: 'center',
            }}
          >
            <div className="col col--5">
              <div className="col-demo">
                <div className="card-demo">
                  <div className="card">
                    <div className="card__body text--center padding--lg">
                      <h3>Your product, your rules</h3>
                      <p>
                        Make your app enterprise-ready, with just a few lines of
                        code. Through its open-source approach, BoxyHQ’s users
                        are free to make any customizations and changes to their
                        features, while also avoiding vendor lock-in.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--5">
              <div className="col-demo">
                <div className="card-demo">
                  <div className="card">
                    <div className="card__body text--center padding--lg">
                      <h3>Resource efficient</h3>
                      <p>
                        Instead of paying thousands of dollars for the large
                        number of connections that your app will have, use
                        BoxyHQ's free open-source solution. Allocate resources
                        to your core value proposition and maximize the benefits
                        for your customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <SectionLayout title="Compare features">
        <table className="pricing__table">
          <thead>
            <tr>
              <th></th>
              <th>BoxyHQ</th>
              <th>WorkOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>License</td>
              <td>Open Source</td>
              <td>Proprietary</td>
            </tr>
            <tr>
              <td>Enterprise SSO</td>
              <td>
                <IconYes />
              </td>
              <td>
                <IconYes />
              </td>
            </tr>
            <tr>
              <td>Directory Sync</td>
              <td>
                <IconYes />
              </td>
              <td>
                <IconYes />
              </td>
            </tr>
            <tr>
              <td>Audit Logs</td>
              <td>
                <IconYes />
              </td>
              <td>
                <IconYes />
              </td>
            </tr>
            <tr>
              <td>Data Privacy Vault</td>
              <td>
                <IconYes />
              </td>
              <td>
                <IconNo />
              </td>
            </tr>
            <tr>
              <td>Admin Portal</td>
              <td>
                <IconYes />
              </td>
              <td>
                <IconYes />
              </td>
            </tr>
            <tr>
              <td>Custom deployment</td>
              <td>
                <IconYes />
              </td>
              <td>
                <IconNo />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Self-Hosted & SaaS</td>
              <td>SaaS</td>
            </tr>
          </tbody>
        </table>
      </SectionLayout>

      {/* Section 3 */}
      <SectionLayout
        title="Open Source"
        description="BoxyHQ is developer obsessed, and our products are secure by design so you can focus on your core value proposition."
      >
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <div className="col-demo">
                <div className="card-demo">
                  <div className="card">
                    <div className="card__body padding--md">
                      <ul style={{ listStyle: 'none', padding: '0px' }}>
                        <li>
                          <div
                            style={{
                              display: 'flex',
                              gap: '5px',
                              alignItems: 'center',
                              paddingBottom: '10px',
                            }}
                          >
                            <IconYes /> Contribute to BoxyHQ and build your own
                            integrations and customizations
                          </div>
                        </li>
                        <li>
                          <div
                            style={{
                              display: 'flex',
                              gap: '5px',
                              alignItems: 'center',
                              paddingBottom: '10px',
                            }}
                          >
                            <IconYes /> Check BoxyHQ’s GitHub repositories
                          </div>
                        </li>
                        <li>
                          <div
                            style={{
                              display: 'flex',
                              gap: '5px',
                              alignItems: 'center',
                            }}
                          >
                            <IconYes /> Interested in Developer Security? Join
                            our Discord community
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </Layout>
  );
};

export default AuditLogs;

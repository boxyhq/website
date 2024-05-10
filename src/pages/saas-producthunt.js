import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import FeaturedQuote from '../components/FeaturedQuote';
import clsx from 'clsx';

const ProductHuntSaas = () => {
  return (
    <Layout>
      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
        }}
      >
        <div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '50px',
              fontWeight: 'bold',
              marginBottom: '40px',
              marginTop: '-40px',
            }}
          >
            Security Building Blocks
          </p>
        </div>

        <div style={{ display: 'flow' }}>
          <iframe
            width="810"
            height="515"
            src="https://www.youtube.com/embed/bmezoOhED4k?si=PyaPvJVjwAV7z-BW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <HeroSection
        title="Hello Product Hunt community! 🤩"
        description="Every application requires minimum viable security to be enterprise-compliant. BoxyHQ provides Security Building Blocks as a Service (a suite of APIs), so developers can focus on their core product and accelerate time-to-market."
        image="/img/product-hunt/render-ss.svg"
        buttons={[
          {
            title: 'Sign up',
            href: 'https://app.eu.boxyhq.com/auth/join?utm_source=website&utm_campaign=saas-producthunt',
            className: 'button-primary',
          },
          {
            title: 'Product Hunt',
            href: 'https://www.producthunt.com/products/boxyhq',
            className: 'button-primary',
          },
        ]}
      />

      <FeaturedQuote
        personName="Steven Tey"
        personRole="Founder Dub"
        pictureSrc="/images/success-stories/steven-tey-dub"
      >
        🔥 BoxyHQ is an absolute godsend!
      </FeaturedQuote>

      <SectionLayout title="Key Features and Benefits" description="">
        <div
          className="row"
          style={{
            paddingTop: '20px',
          }}
        >
          <div className="col col--8 col--offset-2">
            <h3 style={{ textAlign: 'center', fontStyle: 'italic' }}>
              We are delighted to extend a special offer to the Product Hunt
              community: A generous $250 credit toward your BoxyHQ account. Act
              swiftly, as this exclusive promotion is available for a limited
              time, expiring in just 30 days!
            </h3>
            <br />
            <div className="col-demo center">
              <div>
                <ul>
                  <li>
                    <b>🤝 Integrate SAML with Your Preferred Libraries:</b>{' '}
                    Seamless integration with SAML using OAuth 2.0 or OpenID
                    Connect libraries of your choice for a customized and
                    flexible authentication process.
                  </li>
                  <br />
                  <li>
                    <b>👥 SCIM 2.0 Integration via Simple Webhooks:</b>{' '}
                    Effortlessly integrate with SCIM 2.0 providers through
                    straightforward webhooks, streamlining user provisioning and
                    management.
                  </li>
                  <br />
                  <li>
                    <b>
                      🔨 Single integration with an instant connection to most
                      IdPs:{' '}
                    </b>
                    Connect to Okta, Microsoft AD FS, Entra ID (formerly Azure
                    AD), PingIdentity, OneLogin, JumpCloud and other SAML 2.0
                    and SCIM 2.0 compliant Identity Providers.
                  </li>
                  <br />
                  <li>
                    <b>🖥️ Admin Portal for SAML and Directory Sync Support:</b>{' '}
                    Utilize an Admin Portal designed to address customer support
                    issues related to SAML setup and Directory Sync, enhancing
                    your customer onboarding.
                  </li>
                  <br />
                  <li>
                    <b>🎨 Custom Support and Advice on Setup:</b> Benefit from
                    personalized support and expert advice tailored to your
                    specific setup requirements, ensuring a smooth and optimized
                    implementation.
                  </li>
                  <br />
                  <li>
                    <b>📝 Extensive onboarding guides for SAML Setup:</b> Access
                    comprehensive guides for SAML setup with major identity
                    providers, empowering users with clear guidance and
                    troubleshooting resources.
                  </li>
                  <br />
                  <li>
                    <b>🏦 SAML Federation (Enterprise Feature):</b> Federate
                    multiple Identity Providers (IdPs) seamlessly without the
                    need for additional plugins or code changes, an
                    enterprise-grade solution for centralized management.
                  </li>
                  <br />
                  <li>
                    <b>🔨 SAML Tracer for Error Troubleshooting:</b> Empower
                    administrators with a SAML Tracer tool for efficient and
                    effective troubleshooting of errors, reducing
                    troubleshooting times and ensuring a reliable authentication
                    process.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </Layout>
  );
};

export default ProductHuntSaas;

const HeroSection = ({
  title,
  description,
  image,
  buttons,
  icon = null,
  imageWidth = '650px',
}) => {
  const Icon = icon;

  return (
    <div className="container margin-vert--l">
      <div className="row">
        <div className="col col--6">
          <div className="col-demo">
            <div
              style={{
                display: 'flex',
                gap: '5px',
                flexWrap: 'nowrap',
                alignItems: 'center',
              }}
            >
              {Icon && <Icon style={{ width: '40px', height: '40px' }} />}
              <h1 className="hero__title">{title}</h1>
            </div>
            <p className="hero__subtitle margin-top--lg">{description}</p>
            <div className="intro__buttons margin-top--lg">
              {buttons.map(({ href, title, className, onClick }, idx) =>
                onClick ? (
                  <a
                    onClick={onClick}
                    className={clsx('button button--lg', className)}
                  >
                    {title}
                  </a>
                ) : (
                  <Link
                    className={clsx('button button--lg', className)}
                    href={href}
                    key={idx}
                  >
                    {title}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div className="col col--6">
          <div className="col-demo">
            <div className="hero__image hero__image__mobile">
              <img src={image} style={{ width: imageWidth }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionLayout = ({ title, description, children, style, titleStyle }) => {
  return (
    <section className="page__section" style={style}>
      <div className="container">
        <h2
          className="section__header text--center"
          style={{ padding: '10px', ...titleStyle }}
        >
          {title}
        </h2>
        {description && (
          <p className="text--center" style={{ whiteSpace: 'pre-wrap' }}>
            {description}
          </p>
        )}
        <div style={{ marginTop: '30px' }}>{children}</div>
      </div>
    </section>
  );
};

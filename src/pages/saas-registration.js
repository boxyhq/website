import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import NewsSection from "../components/NewsSection";
import HeroSection from "../components/HeroSection";
import InvestorsSection from "../components/InvestorsSection";
import CustomersSection from "../components/CustomersSection";
import DeveloperCommunitySection from "../components/DeveloperCommunitySection";

const Icon3 = require("../../static/img/home-buildingblocks.svg").default;

const title = "BoxyHQ for Startups";
const description = "SaaS offering registration";
const text = (
  <div>
    <p>
      BoxyHQ, the leading provider of security building blocks for developers is
      giving 50% off for the first year's subscription to its SaaS offering!
      Build and ship secure applications implementing features such as
      Enterprise SSO, Directory Sync, Audit Logs, and Data Privacy Vault with
      just a few lines of code.
    </p>
    <div className="intro_buttons margin-top--lg">
      <a
        href="https://share.hsforms.com/1BVctAde2SoO2VC5hNblb0Abvy4r"
        target="blank"
        rel="noopener noreferrer"
        className="button button--lg button--primary"
      >
        Join
      </a>
      <br></br>
      <br></br>
    </div>
    <p>Key Features and Benefits:</p>
    <ul>
      <li>
        <b>Reduce time to market:</b>Build and ship enterprise-grade products
      </li>
      <li>
        <b>Cost Savings:</b>Save money optimizing development costs
      </li>
      <li>
        <b>Develop secure applications:</b>Our APIs integrate security best
        practices into your development process
      </li>
      <li>
        <b>Enhanced Efficiency:</b>With an intuitive interface and powerful
        features, businesses can automate tasks, optimize workflows, and
        maximize efficiency
      </li>
      <li>
        <b>Full Support:</b>BoxyHQ is committed to providing exceptional support
        to its customers, ensuring a smooth onboarding process and continued
        assistance throughout their journey
      </li>
      <li>
        <b>Unmatched Flexibility:</b>The platform offers customizable options,
        allowing businesses to tailor the solution to their unique needs and
        scale as they grow.
      </li>
      <li>
        <b>Advanced Security:</b>BoxyHQ prioritizes data security, employing
        robust measures to safeguard sensitive information and ensure peace of
        mind
      </li>
      <li>
        <b>Seamless Integrations:</b>Integrate with the most popular SSO
        providers such as Okta, Azure AD, Auth0, Google and more
      </li>
    </ul>
    <p>
      <b>Special Offer:</b>
      <br></br>
      To celebrate the launch, BoxyHQ is offering an exclusive opportunity to
      join the waitlist for the SaaS platform and enjoy a remarkable 50% off the
      first year's subscription. By signing up before August 1, businesses can
      take advantage of this limited-time offer and unlock the full potential of
      BoxyHQ's revolutionary solution.
    </p>
    <br></br>
    <p>
      <b>Join the Pre-Launch Waitlist:</b>
      <br></br>
      To secure your spot and claim this irresistible offer, interested
      businesses are encouraged to fill out the form. Simply provide your Name,
      Email, Product of interest, and potential date of implementation. Don't
      miss out on this opportunity to transform your business!
    </p>
    <div className="intro_buttons margin-top--lg" style={{}}>
      <a
        href="https://share.hsforms.com/1BVctAde2SoO2VC5hNblb0Abvy4r"
        target="blank"
        rel="noopener noreferrer"
        className="button button--lg button--primary"
      >
        Join
      </a>
      <br></br>
      <br></br>
    </div>
    <p>
      <b>About BoxyHQ:</b>
      <br></br>
      BoxyHQ is building Security Building Blocks for Developers and is a
      leading security software solutions provider, dedicated to helping
      businesses optimize their operations, boost productivity, and achieve
      remarkable results. With a team of experts and a commitment to innovation,
      BoxyHQ is revolutionizing the way businesses work, making the complex
      simple and the impossible achievable.
    </p>
    <p>
      <h3>
        <i>For media inquiries, please contact:</i>
      </h3>
      <i>Nathan Tarbert</i>
      <br></br>
      <i>Community Success Engineer</i>
      <br></br>
      <i>nathan@boxyhq.com</i>
    </p>
    <p>
      Note: Remember to include your contact information at the bottom of the
      press release for media inquiries.
    </p>
  </div>
);

const SaasRegistration = () => {
  return (
    <Layout title={title} description={description}>
      <HeroSection
        title="BoxyHQ's New SaaS Platform: Security Building Blocks for Developers"
        description={text}
        image="/img/home-hero.svg"
        buttons={
          [
            // {
            //   title: 'Join',
            //   href: 'https://share.hsforms.com/1BVctAde2SoO2VC5hNblb0Abvy4r',
            //   className: 'button--primary',
            // },
          ]
        }
      />
      <CustomersSection />

      <section className="page__section">
        <div className="container">
          <div className="row" style={{ gap: "10px", marginTop: "20px" }}>
            <div className="col col--5 col--offset-1">
              <div className="col-demo">
                <div className="card-demo" style={{}}>
                  <div className="card">
                    <div className="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Become Enterprise Ready
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        As a startup you need to build fast, test and make sure
                        your solution achieves product-market fit. But if you
                        are planning to sell to enterprises you will need to
                        implement security and compliance features that could be
                        expensive and time consuming.
                      </p>
                      <p>
                        Here is a good guide on what becoming enterprise ready
                        means:{" "}
                        <a
                          href="https://www.enterpriseready.io"
                          target="_blank"
                        >
                          EnterpriseReady - Build SaaS features enterprises love
                        </a>
                      </p>
                    </div>
                    <div className="card__footer">
                      <Link
                        className={clsx("button button--primary button--block")}
                        href="https://meetings.hubspot.com/deepakprab/demo?__hstc=213510283.9a563789bb583fca1e9fb20a629c5c94.1651597904536.1664893584285.1664895920328.169&__hssc=213510283.1.1664895920328&__hsfp=498882655"
                      >
                        Book a free enterprise-readiness session
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--5">
              <div className="col-demo">
                <div className="card-demo">
                  <div className="card">
                    <div className="card__header">
                      <h3
                        className="text--center"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        Build or buy?
                      </h3>
                    </div>
                    <div className="card__body">
                      <p className="text--center">
                        Save time and money with BoxyHQ's free open-source
                        solution. Available under an Apache 2.0 license, our
                        solutions make it easy for developers to collaborate and
                        innovate, without the need for custom building or
                        expensive fees.
                      </p>
                      <p className="text--center">
                        Our solutions run in your environment, giving you full
                        control. We simply provide the building blocks to help
                        you succeed.
                      </p>
                    </div>
                    <div className="card__footer">
                      <Link
                        className={clsx("button button--primary button--block")}
                        href="mailto:hello@boxyhq.com"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsSection />
      <InvestorsSection />
      <DeveloperCommunitySection />
    </Layout>
  );
};

export default SaasRegistration;

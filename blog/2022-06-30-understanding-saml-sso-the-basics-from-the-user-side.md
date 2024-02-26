---
slug: understanding-saml-sso-the-basics-from-the-user-side
title: Understanding SAML SSO, the basics from the user side
author: Jay Singh
author_title: Marketing Consultant
author_url: https://www.linkedin.com/in/jaydsingh/
author_image_url: /images/authors/jay.jpg
tags_disabled: [enterprise-readiness, saml, saml-jackson, sso, single-sign on]
image: /img/blog/sso/with-saml.png
---

I have always worked in tech, so have always needed to understand the technical nature of the products we are building. This process has always been over-complicated for me so I now always try to write a guide for non-technical people like me. It turns out that once you understand it you can explain it to other non-technical people much easier! So here we go as I try to explain SAML (Security Assertion Markup Language) SSO (single sign-on) and why BoxyHQ makes it so easy to implement. Firstly you have probably heard of not only SAML but OAuth 2.0 and OIDC, these are all protocols that achieve the same result of providing SSO. There are a few nuances but those are out of scope for this article to keep things simple.

Let's start with what SAML SSO is and what it does. An example of SAML SSO in action would be a user in your company signs into a single dashboard and inside that dashboard, they have all the icons for the external services they use such as their CRM (Hubspot) and accounting software (Xero). The user can now just log in to any of their services by clicking on them rather than logging into each one individually.

But how does this work? Well, the idea behind SAML SSO is that by centralizing your access to an external system you can better manage access and permission as well as improve security. So in our example, the dashboard that allowed the user to just click an icon and log in was SAML in action. Because the company has connected to its external servicing using SAML it can now let its users access all the services from a single point. This single point of access is known as the IdP (Identity Provider) which authenticates the access to all the other services via SAML.

The diagrams below show how this access flow would work with and without SAML:
![Without SAML SSO](/img/blog/sso/without-saml.png)

In the diagram above we can see that the company is not using SAML so the user has to log into each of the services with an individual username and password. The username and password are managed by the service provider and access is also managed via an admin user on the service provider's side. The user must be given access to each of the services from each of the services and remember the login details for each one.

![With SAML SSO](/img/blog/sso/with-saml.png)

In the image above we can see that the company is using an IdP such as Okta so the user simply has to log in once and then can access all the external services from a single dashboard. This also means that the company admins can manage access to the different services as they control the access directly from their IdP.

Now, remember that this is just a high-level overview of SAML and the technical aspects behind the scenes can get a lot more complicated.

We have been looking at SAML from a company user's perspective but it's also important to remember that these service providers also have to build a SAML integration to enable them to connect to their clients’ IdPs. This can be a very long and time-consuming process for service providers and this is where BoxyHQ comes in. Instead of service providers building a custom integration for each IdP their customers use which can take months, the service providers can use BoxyHQ and have all the connections to IdPs they need with a single integration! You can be SAML-ready in as little as 8 days! To understand how this looks check out my other blog [here](./2022-06-30-understanding-saml-sso-the-basics-from-the-solution-providers-side.md).

So what are the main benefits of SAML? Here are three of the most important ones I have identified.

#### Increased Security

SAML is at its heart a security standard and as it provides a single point of authentication that takes place in a secure environment it adds an extra layer of security to your service that most enterprise customers will ask for.

#### Improved user experience

As a user using SAML is very simple and pleasant to use as you only have to log in once and then you can access all your external services on a dashboard with a single click. This saves the user time and makes their overall experience of your product better.

#### Reduces cost

Without SAML you have to maintain account information across multiple services but when you use SAML this is all managed by the IdP.

BoxyHQ is open source and our SAML SSO product, SAML Jackson is just the first product we have built to help companies become enterprise-ready. If you are interested in discussing your authentication strategy or deploying SAML SSO you can book a call with our CEO [here](https://cal.com/deepak-boxyhq/demo) to discuss how we can support you.

I hope you have found this high-level explanation of SAML and its use cases helpful. If you have any questions please don't hesitate to reach out to us on our live chat on our [website](https://boxyhq.com/)

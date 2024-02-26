---
description: 'What is SAML? What role does it play in enterprise single sign-on (SSO)? Learn what these technologies are and how BoxyHQ simplifies the implementation process for developers.'
slug: what-is-saml-and-why-you-should-care
title: 'What is SAML and why you should care'
tags_disabled: [saml, boxyhq, single-sign-on, sso, open-source, developerfirst]
image: /images/blog/what-is-saml.png
hide_table_of_contents: false
author: Schalk Neethling
author_title: Customer Success, Community, DevRel - @BoxyHQ
author_url: https://github.com/schalkneethling
author_image_url: /images/authors/schalk.jpg
---

import LearnMoreCTA from "../src/components/ctas/LearnMoreCTA";
import Picture from '../src/components/Picture';
import SignupCTA from "../src/components/ctas/SignupCTA";

In today's digital world, secure authentication is not just a necessity; it's a cornerstone of trust between services and their users. Navigating the complexities of SAML and implementing robust single sign-on (SSO) solutions can be daunting for many organizations. This document explores the critical role of SAML in enhancing web security, the challenges businesses face in adopting it, and introduces BoxyHQ's streamlined approach to simplifying this process, making advanced security accessible to all.

## SAML from 30,000 feet

SAML, short for Security Assertion Markup Language, is an open standard that utilizes XML to define a framework for exchanging authentication and authorization data. SAML 2.0, its latest version, is primarily used for web browser single sign-on, allowing users to access multiple services with a single set of credentials. This functionality is especially relevant to us, as the [Web Browser SSO Profile](https://en.wikipedia.org/wiki/SAML_2.0#Web_browser_SSO_profile) is our main area of interest, enabling seamless and secure user access across different web applications.

## Why SAML?

To implement single sign-on across the same secure domain is simple and can be achieved using cookies, for example. However, as soon as one needs to implement single sign-on across multiple secure domains the process quickly becomes complex and error-prone. There is a need for single sign-on across multiple secure domains however, but attempts to solve this problem in the past led to a proliferation of bespoke implementations which were not interoperable.

This led to the definition and standardization of the Web Browser SSO profile to promote interoperability. In addition, SAML specifies three roles; the principal, the identity provider (IdP), and the service provider (SP). The principal is often also referred to as the subject and is commonly a human user but could also be another application, for example. An identity provider is a centralized source of truth about the principal. There are several identity providers such as Keycloak, Aerobase, Gluu, and Okta. And the service provider? Well, if you are building a SaaS application, the service provider is you!

And finally, as the name suggests, SAML is used to make assertions, a term one might be familiar with in a testing context when writing code. In the SAML context, assertions are being made about the principal and primarily assertions that allow the service provider to make an access control decision.

Bringing it all together, SAML is a way for us to implement single sign-on across multiple secure domains, using an open, interoperable standard that defines a markup language, protocols, bindings, and profiles. We use all of this to make assertions about a principal, by querying an IdP which in turn allows the service provider to make an informed and trusted access control decision.

## SAML Authentication flow

The way SAML fits into the authentication flow is less complicated than the sum of its parts so, let’s walk through an example. Before we look at SAML specifically we need to take a step back and look at what single sign-on is.

### What is Single Sign-On?

Single sign-on is quite literally as the name suggests. It is a means to sign into multiple applications using a single set of credentials. Let’s walk through this and we will then layer SAML on top. When joining a company you typically get access to multiple applications. Now, one way a company can grant access to these applications is for you to create an account at each provider using your company email address and your chosen password. That would look something like this:

<Picture alt="llustration of a person facing three separate authentication processes leading to different services highlighting the complexity without Single Sign-On." pictureSrc="/images/blog/no-single-sign-on" height="613" width="1229" />

Even if you are using a password manager, you still need to manage three separate accounts. When you leave the company, the company now also faces the problem of ensuring that your access to each of these service providers is terminated. Therefore, for security and an improved user experience, companies chose to use an identity provider.

Through this identity provider, you authenticate once (single sign-on) and then gain access to each application using the same credentials. You never authenticate with the service provider, but instead authenticate once at the identity provider and the identity provider forwards you to the service provider. When you leave the company, your access is revoked by de-provisioning your account at the identity provider. This would look something like this:

<Picture alt="Graphic showing streamlined authentication with Single Sign-On where a figure is connected to a single IdP, which leads to different services symbolizing simplified access to multiple services." pictureSrc="/images/blog/single-sign-on" height="613" width="1229" />

And that, in a nutshell, is what single sign-on is. I am sure you can see why this is a leap forward for both companies and users.

<LearnMoreCTA label="Learn more about Enterprise SSO" url="/enterprise-sso" />

### The role of SAML

Where does SAML fit into all of this then? SAML is what makes the authentication and communication between the identity provider and the service providers possible. It is what allows the service provider to assert that the principal (the user) is who they say they are allowing the service provider to make an access control decision.

There are two ways that a SAML authentication flow is triggered. The one most often used is known as an IdP-initiated flow. As the name suggests, with this flow the user starts at the identity provider and is then directed to the service provider along with a SAML response. You have most likely seen this scenario at your workplace where you log into a dashboard (sso.mycompany.com) and are presented with all of the service providers (applications) you have access to. Clicking on any of these will take you to the service provider without being prompted to sign in again.

This is because the service provider will have what is known as an assertion consumer service (ACS) which understands and can validate the SAML response that was sent from the IdP. The IdP therefore needs to know how to produce a SAML response and the service provider needs to know how to read, parse, and validate said SAML response. At this stage, you will have noticed that there has been no SAML request from either the IdP or the service provider.

A SAML request comes into play with another flow known as the service provider (SP) initiated flow. In this flow, the user starts at the service provider. The service provider will then produce a SAML request and send this along with the user to the configured identity provider endpoint. At this point, the IdP will authenticate the user and return the user to the service provider along with the SAML response as before. While the supported flows are often determined by the service provider, it is common to support both. This means that both the IdP and the service provider need to know how to produce a request and handle a response.

## The thing about SAML

The technical details of all of this will be detailed in a separate article, but suffice it to say that there are several moving parts. If you are a service provider who will sell your software-as-a-service (SaaS) to enterprise or governmental institutions, there is a high likelihood that you will need to support SAML for single sign-on.

### Why am I calling it out in this way?

Well, because there is something I have not yet mentioned about SAML. SAML is an older standard (2.0 was released in 2005) and is incrementally being replaced by modern standards such as WebAuthn, OAuth2, and OpenID Connect which is built on top of OAuth2.

It is therefore common for modern tools, frameworks, and companies to use these newer standards over SAML. However, as with many evolutions in technology, switching takes time, costs money and resources, and carries risks. While there are no hard numbers, especially in industries such as healthcare, finance, and governmental institutions, SAML is still the predominant solution and will be for some time to come.

While calling out those industries, they are by no means the only industries that still rely on SAML. Even in the tech space, companies such as Microsoft still have systems and processes that are SAML-based. It is therefore in your best interest to support SAML to not miss out on a potential contract opportunity.

So what can you do about it? One option is to implement support today or just in time as the need arises. Unless this is your core business, doing so can place significant strain on your available resources now and in the future as the SAML implementation, like all other areas of your product, will need to be maintained and edge cases handled as they arise. Even though SAML is an open standard that has been around for over 20 years, there are nuances between implementations.

## How does BoxyHQ solve this problem?

Instead of spending valuable brain space, resources, and money trying to solve all of this, you can let BoxyHQ be your proxy between the SAML-based IdP and yourself. This means that your application only needs to use and understand OAuth2 or OpenID Connect. BoxyHQ’s SAML Jackson will take care of translating between these protocols and SAML in addition to dealing with any nuances between implementations and identity providers.

<Picture alt="An image depicting a diagram illustrating single sign-on integration using BoxyHQ, with multiple Identity Providers (IdPs) connected through a single API for simplified authentication." pictureSrc="/images/blog/with-boxyhq" height="613" width="1229" />

With BoxyHQ sitting in between you and the identity providers as a proxy service provider, you can build your application and not be concerned about SAML or how the flow is being initiated. In addition, you get access to an administration portal where you can configure your products and connections including setup links that allow you to create a shareable link allowing you to create an SSO connection without exposing any sensitive information.

Try our SaaS product offering today for free, and when you are ready to commit, you can stay as a SaaS customer and let us take care of the infrastructure in addition to SAML. Because of our open-source nature, you can also choose to self-host and later enable additional enterprise features and premium support for your self-hosted instance. Details on our products can be found on our pricing page, or get in touch today and open new doors for future growth.

<SignupCTA campaign="what-is-saml" />

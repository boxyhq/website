---
slug: the-ikea-effect-in-software-engineering
title: The IKEA effect in Software Engineering
author: Deepak Prabhakara
author_title: Co-founder & CEO @BoxyHQ
author_url: https://github.com/deepakprabhakara
author_image_url: /images/authors/deepak.jpg
tags_disabled: [enterprise-readiness, ikea-effect]
image: /img/blog/jay-wennington-BdeMttZx6Fs-unsplash.jpg
---

I recently had to revamp my home office setup and decided to make a trip to my closest IKEA. The wide range of choices of desks in Micke, Malm, Brusali, Alex, and Bekant was only the beginning of the journey. I knew I had to head back home with the desk, find a good place to unpack the unit, find my screwdrivers, hammer, alan keys, and finally dedicate a few hours of labor to assemble everything. I enjoy the process but it is not devoid of frustrations. In the end, I now have a desk I value more because of the labor I put into it.

![IKEA Assembly](/img/blog/jay-wennington-BdeMttZx6Fs-unsplash.jpg)

<div style={{fontSize: "10px", marginTop: "-10px", paddingBottom: "20px"}}>Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
This is the IKEA effect, a cognitive bias where we place a disproportionately high value on products that we have partially created. This makes people value things they had a part in building than the ones they didn’t. We face this challenge as developers every day, the classic build vs buy decisions when we build software. We’d love to build everything ourselves and in an ideal world this would be possible but we need to juggle business requirements, limited resources, and deadlines. The challenge is always in striking the right balance between building what is core to the business and finding ways to offload non-core tasks.

Just like how an IKEA desk is pretty useless if half-assembled, a feature we set out to build is pretty useless if we end up getting caught up in the implementation details and are unable to see it through. When we set out to build BoxyHQ we constantly heard about the challenges of enterprise readiness from startups. They have to support a range of compliance, security, and governance requirements from their enterprise customers and their developers end up spending 30-40% of their time bogged down in the details of implementation. These startups build teams to work on cool and exciting things that are core to their business but the reality is that non-core features start competing for attention. As a result these non-core features also end up being just good enough to check some boxes and never quite get as innovative as they can get.

We have seen software eat the world. This has led to more surface area for security exploits and leaks which in turn is driving a broader awareness of security topics in enterprises. Security has become the top priority for all companies now and is no longer seen as the sole responsibility of the CISO’s team. This means a shift-left trend in compliance and data security for developers and we are taking a new approach at BoxyHQ to solve this problem. BoxyHQ provides developers with non-core building blocks (described above) that integrate easily with their products. Simple self-hosted services and APIs that they can pull into their existing technology stack. Developers no longer have to worry about correctly implementing SAML login flows, building and scaling a robust audit logs service, or figuring out the best encryption technique to safeguard PII data.

BoxyHQ will build IKEA desks for all our customers so they don’t have to. Just sit at your pre-assembled desk and continue working on cool things that you set out to build in the first place.

PS: Announcing SAML Jackson (who doesn’t like a bit of Pulp Fiction), a SAML SSO service that works seamlessly as an OAuth 2.0 flow and abstracts away the tedious XML bits of the SAML protocol. Check out [our repository](https://github.com/boxyhq/jackson) and the [demo](https://github.com/boxyhq/jackson-examples/tree/main/apps/next-auth). If SAML SSO is not relevant to you at this moment don’t forget to bookmark us and check back again. We are building a **"DevSecMesh"** over time so you can expect a lot of exciting features in the coming months.

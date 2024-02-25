---
slug: sso-wall-of-shame-vs-wall-of-fame
title: 'SSO "Wall of Shame" vs "Wall of Fame"'
tags_disabled:
  [developer, security, cybersecurity, devsecops, appsec, sso, open-source]
image: /img/blog/shame-vs-fame.png
authors:
  - name: Sama - Carlos Samame
    title: Co-founder & COO @BoxyHQ
    url: https://www.linkedin.com/in/samame
    image_url: /images/authors/sama.jpg
  - name: Deepak Prabhakara
    title: Co-founder & CEO @BoxyHQ
    url: https://github.com/deepakprabhakara
    image_url: /images/authors/deepak.jpg
---

Unless you have been living under a rock, you have probably heard of the SSO Wall of Shame. This is a list of vendors that treat single sign-on as a luxury feature, not a core security requirement. There have been numerous complaints regarding the companies that have made it onto this list, and rightfully so. In a downturn economy and in times when security and privacy are critical, many organizations see an opportunity to generate even more revenue.

This is a small example, listed in alphabetical order of some of the most well-known companies that have ended up on the “Wall of Shame” (see the screenshot below). You can find more information and the full list at [sso.tax](https://sso.tax). It is clear that raising prices for enterprise SSO and other security features, such as Audit Logs (to track critical events), is just part of their revenue model.

![sso tax list](/img/blog/sso-tax-list.png)

But is this the right thing to do? It’s hard to judge from the outside, and clearly companies need to make a profit while showing growth, especially when you are backed by Venture Capital. Having said that, at BoxyHQ we believe that we can all do better (we are also Venture funded). Nonetheless, cybersecurity taxes should stop, and we should all focus on increasing our security posture and making a positive impact. Take for example, Hubspot charging 6300% more for SSO functionality! That is a clear example of how absurd and abusive some companies can be.

Now, we ask ourselves, how about the “Wall of Fame”? This is a separate list of companies that lead by example and don’t take advantage of their customer base. If you do a quick search, you will find some interesting companies listed. Grafana, Cal.com, and Sumo Logic, just to name a few.

To understand why startups normally lean this way, it’s important to consider the enterprise deal process. With RFPs, security questionnaires, and other compliance-related procedures, closing an enterprise deal becomes all-consuming for a startup. This can justify an enterprise pricing tier. Given a startups early evolution of products, , Enterprise SSO becomes an easy candidate to distinguish the pricing tier gap between charging SMBs and what they can charge enterprises. But building and maintaining SSO is expensive and time-consuming. SAML is not necessarily the easiest protocol implementation to get right. And add to this the customer support issues that come with onboarding large enterprise teams onto the product. But as a startup matures the product needs to have enough core enterprise features and not merely depend on undifferentiated features like SSO.

To take it full circle, it would be nice to see a full list of the SSO Wall of Fame. Then we could ensure support for the companies with integrity, who have clearly not been overtaken by greed. Unfortunately because of our bandwidth, we can not commit to full ownership of this initiative, but can offer some practical advice on how companies could start offering SSO pricing tiers for free or at a nominal price increase:

- Charge for other core enterprise features instead of SSO. If your product is not quite to that level of maturity, please read on.
- Instead of charging for SSO, charge for the security process’s that comes with enterprise deals. If a company wants you to go through its security and compliance process, rather pay a premium to enhance its security posture and reduce compliance risk from its vendors.
- If that scenario isn’t possible then consider segmenting SSO pricing based on the number of users or seats. SMBs will not have a very large number of seats so this could be a possible way to separate your pricing.
- If your Enterprise tier is not based on seats, a natural progression is to base pricing on usage.

We are trying to do our part by providing a free open–source enterprise-grade SSO (called SAML Jackson), that any developer, team, or organization can plug into with just a few lines of code. Check out the GitHub repo [here](https://github.com/boxyhq/jackson). Feedback is much appreciated and a star will help us raise security awareness. 🙂

Stay safe, do good, and avoid the dark side of the SSO tax!

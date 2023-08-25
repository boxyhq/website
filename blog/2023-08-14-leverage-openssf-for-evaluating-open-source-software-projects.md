---
slug: leverage-openssf-for-evaluating-open-source-software-projects
title: 'Leverage OpenSSF for evaluating open-source software projects'
author: Hung Ngo
author_title: Cybersecurity Engineer @ PwC
author_url: https://www.linkedin.com/in/hungoboss/
author_image_url: /img/blog/hung-ngo-headshot.jpeg
tags_disabled: [developer, security, saas, devsecops, appsec]
image: /img/blog/openssf-image-title.png
---

If we consider the realm of open source, it naturally raises questions about the intersection of open-source principles and the importance of security. In this context, finding the right balance between transparency and safeguarding sensitive aspects becomes crucial.

Did you know that more than 75% to 90% of any modern software project contains at least one open-source component? These components, usually known as dependencies, help the development team move quickly and stay productive. With their rapid adoption, thousands of direct and transitive dependencies are created. The health of these dependencies becomes crucial, as the chain is only as strong as its weakest link. That's where the OpenSSF Scorecards come in.

![Show off your score](/img/blog/hung-blog-1.png)

## OpenSSF

Before we start talking about Scorecards, we have to mention OpenSSF. OpenSSF stands for Open Source Security Foundation which is a cross-industry organisation that brings together the industry's most important OSS security initiatives and the individuals and companies that support them. They are committed to advancing open-source security for all.

Learn more about OpenSSF at: https://openssf.org/about/

## Introducing Scorecards

In late 2018, people started wondering how to make sure that the components we are using are healthy. But does it even mean that the software component is healthy? When it comes to software, we might be asking ourselves these questions:

- Is the component well maintained?

- How often has it been updated?

- Are there multiple maintainers, or does it rely on the work of an individual? (In case that individual leaves, it might crash the whole project.)

- Are there any critical vulnerabilities? (Additionally, you should also check whether a project is using any SAST tools.)

- Does the project have any security policies in place?

- Does the project also use any dependency update tools?

Answering every one of them might be pretty tiresome, which is why we can leverage scorecards to evaluate them for us. Scorecards can help you enforce the best practices and protect yourself and your organization against:

- Malicious maintainers

- Build system compromises

- Source code compromises

- Malicious packages

It does so by checking for vulnerabilities that would affect the software supply chain. The checks are automated, and every check returns a score on a scale from 0 to 10 and the associated risk level, which is either low, medium, high, or critical. The risk level affects the returned score by adding weight and helps to calculate the final score.

![Score graph](/img/blog/hung-blog-2.png)

Okay, so let's see how we can use Scorecards. There are multiple ways to set them up. We will show you the most convenient one, which is through a Docker container. You will also need your GitHub personal access token.

## Generating a GitHub access token

We will start with the creation of the GitHub access token. First of all, go to [github.com](http://github.com) and open the "Settings".

![Settings](/img/blog/hung-blog-3.png)

In the left menu, scroll down to the last item - "Developer Settings".

![Dev-settings](/img/blog/hung-blog-4.png)

Within the "Developer Settings", we can select "Personal access tokens" and choose between fine-grained and classic tokens. For the purposes of our demo, we are going to go with the fine-grained one as they contain all the required configuration. After generating the token, make sure that you copy and save your token somewhere as it can not be viewed more than once.

![Fine-grained token](/img/blog/hung-blog-5.png)

So now we have our own personal token that is going to expire after some time. The next step is to pull the docker image and run the scans.

![Fine-grained token2](/img/blog/hung-blog-6.png)

## Docker and scan

First, let's start by pulling our Docker image using this command:

`docker pull gcr.io/openssf/scorecard:stable`

At BoxyHQ, we're strong proponents of the open-source potential. Our [GitHub repositories](https://github.com/boxyhq) reflect this commitment. Let’s demonstrate the Scorecards by scanning several popular open-source projects from GitHub. We can do this by typing this command into the console:

`docker run -e GITHUB_AUTH_TOKEN=<your_token> gcr.io/openssf/scorecard:stable --show details --repo=<repo_you_want_to_scan>`

![Token](/img/blog/hung-blog-7.png)

Under the aggregated score, we can see the detailed report with the score for each and every check. Not only is there a detailed explanation, but the Scorecard also provides a link to the documentation and remediation tips.

![terminal](/img/blog/hung-blog-8.png)

We have scanned the 10 most popular open-source projects on GitHub using Scorecards and these are the results.

![terminal2](/img/blog/hung-blog-9.png)

Open-source security is a paramount concern, and it's a commitment that should be taken seriously. If safeguarding your project's dependencies resonates with you, it's time to embrace the power of security because OpenSSF Scorecards is a great way to accomplish this.

At BoxyHQ, we're not just another cybersecurity organisation – we're also a thriving open-source community that invites you to be a part of something bigger. Open source is more than a concept; it's a movement, a philosophy, and a way of collaborating that fuels innovation and drives positive change. And we're here to extend an enthusiastic invitation for you to join us on this journey.

** Join our [Developer Security Community](https://discord.boxyhq.com) and bolster open-source security with BoxyHQ today! **

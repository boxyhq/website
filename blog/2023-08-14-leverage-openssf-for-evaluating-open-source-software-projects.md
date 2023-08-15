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

Here at BoxyHQ, we are passionate about open-source. We love the idea behind it and it's engraved in our hearts. In fact, did you know that our project is open-source? You can check it yourself at <https://github.com/boxyhq>. But when it comes to open-source, there is a lingering question of open-source and security.

Did you know that more than 75% to 90% of any modern software project contains at least one open-source component? These components, usually known as dependencies, help the development team move quickly and stay productive. With their rapid adoption, thousands of direct and transitive dependencies are created. The health of these dependencies becomes crucial, as the chain is only as strong as its weakest link. That's where the OpenSSF Scorecards come in.

![](https://lh4.googleusercontent.com/hp8oxCqMo6l0BSD6cHidQgJPgam_Foc7RQ8C6wmxAXTHeRhwU1eY0ufL39miXYV1ga_exi2qPr8nn50En9emQ7N7GQZ4tyvzV6ZnYwelLXnx-NQkUZNdwZ-d9AA1AIJOBdAWoiCnMZhKUI_Q90eH01s)

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

Answering every one of them might be pretty tiresome, which is why we can leverage scorecards to evaluate them for us. Scorecards can help you enforce the best practices and protect yourself and your organisation against:

- Malicious maintainers

- Build system compromises

- Source code compromises

- Malicious packages

It does so by checking for vulnerabilities that would affect the software supply chain. The checks are automated, and every check returns a score on the scale from 0 to 10 and the associated risk level, which is either low, medium, high, or critical. The risk level affects the returned score by adding weight and helps to calculate the final score.

![](https://lh4.googleusercontent.com/tHb-KjPlooIU8Nb94fF8UIJQHHI0H1GqIUjqOfwtf4zfisy3Ftq2mbD5BHYp5uwjZhW6YSWYDU4jGDjsW0tcYHP_3k1eNrJGo-NM8I4x4yOG_m1gjbbNuglwo_0pr4XpUY8t6MP24G4L-OvJDwTfDGc)

Okay, so let's see how we can use Scorecards. There are multiple ways to set them up. We will show you the most convenient one, which is through a Docker container. You will also need your GitHub personal access token.

## Generating a GitHub access token

We will start with the creation of the GitHub access token. First of all, go to [github.com](http://github.com) and open the "Settings".

![](https://lh5.googleusercontent.com/600i0mU6GbwPLppkND1fMHpdaA0ykxtn8YoVDhTOy6PC1bF2gB7nqaGAzkuWNIlsWef8SwHRtwU9UfK2cHsK92BJFbMfNOPifZeCGkX9vANCm1HtgLEmLbYnxRimYV1i3sl16XfeuUKz3mvQ34JLbRc)

In the left menu, scroll down to the last item - "Developer Settings".

![](https://lh6.googleusercontent.com/b7jBPxtPdplexChd_WlIdbjAXfBrL2NVXBtwmfpT7_z9LcoSnG6ap4cvdqRm8YCsidczO-ou1Aa-eYuy_PpwSW9c-hHZGQjr8d45XrPcwOhW0A0vvLUZ9beAcvIsrvacyfl_XmRPdHL63u1Vrp_uBO4)

Within the "Developer Settings", we can select "Personal access tokens" and choose between fine-grained and classic tokens. For the purposes of our demo, we are going to go with the fine grained one as they contain all the required configuration. After generating the token, make sure that you copy and save your token somewhere as it can not be viewed more than once.

![](https://lh3.googleusercontent.com/LRBG1OY3avMyrtqt0Peo-aekRkgL1PayCgihlFnoS4EIk8twx4TtWI2lJwFrs2PErCwgrbEKNC6zqW0-Vu4DULyZbmzJ_2UDzrNx9UlmjQujXLb21arAuyBDu_uOj2oBKMR89JAOW3ZaEiYziSuy7bA)

So now we have our own personal token that is going to expire after some time. The next step is to pull the docker image and run the scans.

![](https://lh6.googleusercontent.com/grvTNct-w3mohG8keEzFtJN8vkAzpk29iPhcZMyTmGSsBC5yuuI3Tlu9ANz54J93m4BwQqVPSlDvslHHvuWEBNYWl42vtNXlT1000U83YTu-iNuOZQA5emAoGYT9Y63PUmPsw9Qc7gUxOecoubZlleE)

## Docker and scan

First, let's start by pulling our Docker image using this command:

`docker pull gcr.io/openssf/scorecard:stable`

As I have mentioned, the BoxyHQ project is open-source, so let's demonstrate the Scorecards by scanning several popular open-source projects from GitHub. We can do this by typing this command into the console:

`docker run -e GITHUB_AUTH_TOKEN=<your_token> gcr.io/openssf/scorecard:stable --show details --repo=<repo_you_want_to_scan>`

![](https://lh5.googleusercontent.com/RbZTY_rEt2mfcDLV61eyustU7DdzIIlXCYpFVIVqKcR5MfHdGmhNaDdj8MYkYOvlHtDuPSxhCDNJzNvJWgCc1IrXXkueq2S4zeOTTYP4aagP6WRyuxWtcebBigMbDvz9coPa4B-2sw7vb0LMWOyZ6xU)

Under the aggregated score, we can see the detailed report with the score for each and every check. Not only is there a detailed explanation, but the Scorecard also provides a link to the documentation and remediation tips.

![](https://lh4.googleusercontent.com/78MQqaN7m-kjG2Ps9cbcZm1CcoQxa8GmpGla1aQL5-cnP1meO79jlHGs7XyCqrD_UPR1D6c4yg6ujN0RPQRfy86ct-kh20VLa841P1NddsETWywBRpW9EC_ZSIqfLldDQSfy0_-faD-qekwcPElLHfY)

We have scanned the 10 most popular open-source projects on GitHub using Scorecards and these are the results.

![](https://lh6.googleusercontent.com/7Pli6PJ-NRP1UDVQoW-1HZa0FZ1AnunK1qwRuPO7m6HGfRglFDQLp9luG0-29u9YzP531e44z6SHFoNQTEYBBcjsSsmAwe1YVbW6RfZ2lxPJ49I_bvm1gw22-O6ppc7wrWKWX_ZMuJduxtdkCPMAPbA)

Open-source security is an important topic, and at BoxyHQ, we take it seriously. If you want to make sure that your project dependencies are safe, you should use them too!

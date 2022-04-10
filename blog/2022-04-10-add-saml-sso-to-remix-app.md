---
slug: add-saml-sso-to-remix-app
title: How to add SAML Federated Identity to a remix app
author: Aswin V
author_title: Senior Software Engineer (Open Source Dev Tools) @BoxyHQ
author_url: https://twitter.com/av_2021
author_image_url: https://avatars.githubusercontent.com/u/3107922?v=4
tags: [enterprise-readiness, saml, saml-jackson, integrations, remix]
---
Ever since it was first [launched](https://remix.run/blog/remix-v1), remix has made a mark of its own as an edge-first web framework which moves bulk of the JavaScript workload from the user's browser to a server closer to the user. In doing so it embraces platform features like [Web Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and augments the good old HTML forms to support data mutations. The end result is a super fast user experience all the while shipping less code to the browser. And we thought it would be a cool idea 😎 to plug SAML auth into a remix app. Let's get started 🚀. If you wish to dive straight into the source see https://github.com/boxyhq/jackson-remix-auth

# Creating the remix app

---
slug: security-update-addressing-xml-signature-verification-vulnerabilities
title: 'Security Update: Addressing XML Signature Verification Vulnerabilities'
tags_disabled: [developer, security, cybersecurity, saml]
image: /img/blog/matthew-henry-fPxOowbR6ls-unsplash.jpg
author: Deepak Prabhakara
author_title: Co-founder & CEO @BoxyHQ
author_url: https://github.com/deepakprabhakara
author_image_url: /images/authors/deepak.jpg
---

At BoxyHQ, security is a top priority. At BoxyHQ, security is a top priority. Recently, a vulnerability was disclosed in a library we use. Thanks to coordinated efforts between our team, [Alexander Tan](https://hackerone.com/ahacker1), library maintainer Chris Barth, WorkOS, and other vendors, we patched the issue efficiently and responsibly.

No customers were affected, and our multi-tenancy security measures provide additional protection against such risks.

## Vulnerability Details

XML Signature Verification Bypass via DigestValue Comment [GHSA-x3m8-899r-f7c3](https://github.com/node-saml/xml-crypto/security/advisories/GHSA-x3m8-899r-f7c3)

- This vulnerability allows an attacker to bypass XML signature verification by injecting an XML comment within the `<DigestValue>` element.
- As a result, an altered or malicious XML document could be accepted as valid, potentially leading to security risks such as data manipulation or authentication bypass.
- The issue has been patched by ensuring strict parsing and validation of `<DigestValue>`.

XML Signature Verification Bypass via Multiple SignedInfo References [GHSA-9p8x-f768-wp2g](https://github.com/node-saml/xml-crypto/security/advisories/GHSA-9p8x-f768-wp2g)

- This flaw occurs when an XML signature contains multiple `<SignedInfo>` references, leading to ambiguity in the verification process.
- An attacker could exploit this to trick the verification mechanism into validating a signature against an unintended portion of the document.
- The fix enforces stricter handling of `<SignedInfo>` references to prevent such bypass techniques.

These vulnerabilities underscore the importance of robust XML signature verification to prevent tampering and unauthorized access.

## Coordinated Disclosure in Action

Security vulnerabilities are inevitable in software, but how we handle them makes the difference. Our process prioritizes transparency, collaboration, and rapid remediation:

- Verified the issue and assessed its impact.
- Coordinated with WorkOS and other vendors to mitigate risks.
- Deployed an interim patch while a full fix was developed.
- Worked with Alexander Tan and the library maintainer to resolve the issue.
- Released a final patch with clear guidance for affected users.

This structured approach ensured a swift response while minimizing risks.

## Security is a Community Effort

Cybersecurity thrives on collaboration. Alexander’s responsible disclosure, the maintainer’s prompt response, and vendor cooperation were instrumental in resolving this issue effectively. Open collaboration strengthens the software ecosystem, enabling us to respond proactively to threats.

## Looking Ahead

We appreciate the collective effort that made this fix possible—special thanks to Alexander Tan and WorkOS for their contributions. Our commitment to security remains unwavering, and we encourage developers and researchers to engage in open dialogue about potential risks.

For security concerns, contact us at security@boxyhq.com. A detailed blog post on the exploit and mitigation will be released soon.

Thanks to everyone who contributed to resolving this issue!

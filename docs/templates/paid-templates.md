---
title: Paid templates
description: Paid templates should be packaged, versioned, licensed, and documented without exposing private source material.
---

Paid templates should be packaged, versioned, licensed, and documented.

For the first release, Gumroad can handle purchase, delivery, and license
records. GitHub access can be layered on when a buyer needs a maintained
repository instead of a downloadable zip.

## Recommended access model

Use two delivery modes:

| Mode | Best for | Access |
| --- | --- | --- |
| Downloadable package | Most early buyers | Gumroad zip or file delivery |
| Licensed GitHub access | Buyers who need updates or private docs | GitHub private repo or team access |

Do not make GitHub access the default until support expectations are clear.
Private repo access creates ongoing operational work: invites, revokes, license
checks, support, and version expectations.

## Gated documentation

Best practice is to keep public docs public and put licensed implementation
details with the paid artifact.

That usually means:

- public docs explain concepts, evaluation, and basic usage
- paid package docs explain installation, customization, and maintenance
- private GitHub docs are for licensed users who receive maintained updates
- internal source notes stay out of both public and paid docs

## Licensing notes

For paid templates, each release should include:

- version
- release date
- package contents
- license terms
- update policy
- support policy
- source provenance

The license record should answer: what did the buyer get, what may they do
with it, and what future access is included?

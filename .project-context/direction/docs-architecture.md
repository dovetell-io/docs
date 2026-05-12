---
title: Docs architecture
description: A lightweight architecture plan for dovetell public docs, paid template docs, and source assets.
---

Status: draft  
Source: codex-9900dfb7  
Updated: 2026-05-11T16:43:00Z

## Goal

Create a durable docs-as-code system where public documentation, paid template
documentation, and private source assets have clear roles.

The system should be useful now and flexible later.

## Repositories

| Repo | Role | Publication |
| --- | --- | --- |
| `dovetell-io/docs` | Public documentation site | `docs.dovetell.io` |
| `dovetell-io/dovetell-assets` | Source assets, package candidates, reusable templates | Private or controlled release |
| Paid delivery repo or package | Licensed buyer access when needed | Gumroad and optional GitHub access |

## Recommended model

Use `dovetell-assets` as the source and staging repo for templates.

Use `docs` as the public documentation site.

Use Gumroad for early paid package delivery. Add GitHub gated access only for
buyers who need maintained updates, private implementation docs, or repository
access as part of the product.

## Public docs

Public docs should include:

- what dovetell is
- context debt and docs-as-code concepts
- getting-started guides
- framework explanations
- public-safe template overviews
- free samples
- privacy and publication boundaries

Public docs should not include:

- private strategy
- customer details
- unreviewed package source
- internal launch notes
- unsupported product claims
- full paid template contents

## Paid template docs

Paid template docs should include:

- package contents
- installation or setup steps
- customization guidance
- maintenance workflow
- update policy
- license terms
- support expectations

These docs can ship inside the Gumroad package first. If GitHub access becomes
part of the paid product, the private GitHub repo can host the maintained copy.

## GitHub gating

For early sales, prefer Gumroad delivery because it is operationally simple.

For GitHub-gated access, use a private repository or private organization team
per access level. The key operational questions are:

- How is purchase status verified?
- Who sends and revokes invitations?
- Does access expire?
- Which license maps to which repo or team?
- Are updates included?
- What support level is promised?

This should be designed before promising GitHub access as part of the product.

## Promotion workflow

```text
source asset -> privacy review -> usefulness review -> public rewrite or paid package -> release
```

Promotion should preserve provenance:

- source repo and path
- reviewing session or PR
- release version
- destination surface
- license or visibility

## Site framework

Use Docusaurus for the first proper docs site.

Reasons:

- Markdown-first
- Git-friendly
- strong sidebar model
- easy GitHub Pages deployment
- versioning available later
- enough structure without requiring a custom docs platform

Do not enable full docs versioning until the public docs have enough release
pressure to justify it.

## Near-term roadmap

1. Convert the docs repo into a Docusaurus site.
2. Publish public-safe conceptual docs and starter guides.
3. Define paid template package boundaries.
4. Create a release checklist for Gumroad packages.
5. Decide whether GitHub-gated access is a premium support/update feature.
6. Promote reviewed asset docs from `dovetell-assets` into public or paid docs.

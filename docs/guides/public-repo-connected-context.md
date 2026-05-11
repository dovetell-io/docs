---
title: Public repo with connected context
description: Keep public implementation and documentation separate from private strategy, operating context, and unresolved work.
---

A public repo can depend on context that should not live in the public tree.

Use this pattern when a public implementation repo needs context-aware work,
but strategy, validation, launch planning, or internal decisions belong in a
private or semi-private source.

## Pattern

Use separate surfaces:

- public repo: public implementation, public docs, public assets
- connected context repo: private strategy, GTM, positioning, validation, and operating context
- source assets repo: reviewed reusable templates and package candidates
- temporary transfer area: quarantine for not-yet-routed material

## Authority model

The split is not only about secrecy. It is also about authority.

The public repo is authoritative for:

- public documentation
- shipped behavior
- implementation details that are safe to expose
- docs site build and deployment configuration

The connected private context is authoritative for:

- exploratory thinking
- draft positioning
- unresolved questions
- sensitive operating context
- promotion candidates that still need review

If these conflict, pause and reconcile before publishing.

## Promotion rule

Do not copy private or draft material directly into public docs.

Promote the lesson, not the raw context.

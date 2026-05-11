---
title: Reconciliation
description: Reconciliation makes drift visible and reviewable without overwriting local project truth.
---

Reconciliation makes drift visible and reviewable.

The goal is not to force every repo to look identical. The goal is to compare
source, project, and local context so teams can decide what should change.

## What gets reconciled

Reconciliation focuses on structure and identity:

- which context files exist
- which templates those files follow
- which required sections and fields exist
- which local variants are intentional
- which object IDs refer to the same durable thing
- which surfaces are public, private, or paid

## What stays local

Local project truth stays local unless someone deliberately promotes, migrates,
or merges it.

Examples:

- current tasks
- completed work history
- decision rationale
- risk notes
- project-specific strategy
- private operating context

Those details may be reviewed during reconciliation, but they should not be
silently replaced by a package update.

## Docs implication

The public docs site should not be a dumping ground for every useful note.

It should contain reviewed, audience-ready documentation promoted from source
material.

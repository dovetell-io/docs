---
title: Decisions
description: Public decisions that guide the dovetell documentation system.
---

This page records public-facing documentation decisions. It is not a substitute
for private project context or package-source decisions.

## Active decisions

### Use the docs repo as the permanent public documentation site

Public dovetell documentation should live in this repository and publish to
`docs.dovetell.io`.

### Keep source assets separate from public docs

Reusable templates and package candidates should remain in the source assets
repo until they are reviewed and promoted.

### Use docs as code

Documentation should be written as Markdown, reviewed in Git, built as a static
site, and deployed through repeatable automation.

### Start lightweight

The docs site should begin with a small information architecture and grow as
the product, templates, and support surface mature.

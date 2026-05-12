---
title: Tracking over time
description: Unique assessment IDs let teams retake the assessment and watch maturity change over time.
---

The assessment is more useful when it becomes a tracking loop.

A team should be able to save a unique project link, retake the assessment
later, and see whether its practices have improved.

## ID model

| ID | Meaning |
| --- | --- |
| `uid` | User ID. Permanent per browser. Ties a person's projects together without requiring an account. |
| `pid` | Project ID. One per team or initiative. Lives in the unique URL and persists across retakes. |
| `aid` | Assessment ID. Generated for each submission. Tracks one run within a project. |
| `vid` | Version ID. Identifies the question set used for the run. |

## Hierarchy

```text
email
└── uid
    ├── pid-a  Ops Analytics Team
    │   ├── aid-1  Jan 2026 - v01 - 14/90 - Scattered
    │   ├── aid-2  Mar 2026 - v01 - 32/90 - Structured
    │   └── aid-3  May 2026 - v01 - 58/90 - Coordinated
    └── pid-b  Data Infrastructure Squad
        └── aid-1  Mar 2026 - v01 - 21/90 - Scattered
```

## Unique link

Example:

```text
dovetell.io/assessments/?pid=8f3c2a1b
```

Each retake generates a new `aid` while preserving the same `pid`.

That lets the project build a trajectory instead of a one-time score.

## Product signal

Tracking creates a feedback loop for dovetell.

Over time, the product can learn:

- which teams improve after adopting templates
- which capability areas remain stuck
- which recommendations actually lead to progress
- which gaps justify paid templates or future SaaS features

That is why the assessment should be treated as a product entry point, not just
a static quiz.

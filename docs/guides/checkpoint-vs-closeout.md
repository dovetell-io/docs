---
title: Checkpoint vs closeout
description: Use checkpoints for continuity and closeouts for durable session records.
---

Checkpoint and closeout are related, but they should not carry the same weight.

A checkpoint preserves continuity. A closeout records a completed work boundary.

## Checkpoint

Use a checkpoint when work may continue but context might be lost.

Common triggers:

- context window compression
- long-running session
- switching tasks
- meaningful file changes
- before a risky refactor or migration
- before handing work to another person or agent

A checkpoint should be lightweight.

Minimum useful output:

```yaml
checkpoint:
  date: YYYY-MM-DDTHH:MM:SSZ
  reason: context-compression|manual|handoff|risk-boundary
  changed-files:
    - path
  current-thread: what we were doing
  unresolved:
    - question or risk
  next-step: where to resume
```

## Closeout

Use a closeout when a session, work lane, or review window is ending.

A closeout should answer:

- What changed?
- What decisions were made?
- What tasks were added or completed?
- What remains unresolved?
- What should the next session read first?

Closeouts are heavier because they preserve the audit trail.

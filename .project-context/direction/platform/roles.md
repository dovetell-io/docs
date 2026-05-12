---
title: Platform roles
description: Planned role model for future dovetell platform workflows.
---

Status: planned.

Future platform roles should be simple enough for small teams and explicit
enough for governed teams.

## Candidate roles

| Role | Purpose |
| --- | --- |
| Owner | Owns the workspace, billing, and high-level governance settings. |
| Maintainer | Curates templates, documentation structure, and project context. |
| Reviewer | Reviews changes, recommendations, and promoted documentation. |
| Contributor | Creates tasks, drafts context, and uses templates in active work. |
| Viewer | Reads published guidance and project history. |

## Actor and mode identity

Some workflows need to identify not only the person, but the mode they are using.

For example:

```text
jc/tech-writer
task-assets-jc-tech-writer-0001
```

This keeps provenance visible when the same person is acting in different
contexts, such as technical writer, reviewer, product owner, or implementation
agent.

## Early rule

Keep roles boring until the product proves it needs more precision.

Most teams should be able to start with owner, maintainer, contributor, and
viewer. Add reviewer or mode-specific controls where review, provenance, or paid
template access requires it.

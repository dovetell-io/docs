---
title: Review workflow
description: Planned review workflow for promoting context and documentation safely.
---

Status: planned.

dovetell should treat documentation and context changes as reviewable work.

That does not mean every note needs a formal approval process. It means that
important changes should have a visible path from draft to reviewed material.

## Candidate flow

1. Create or update project context.
2. Attach the relevant actor or mode identity.
3. Draft the documentation, template, or recommendation.
4. Review for accuracy, audience fit, and provenance.
5. Promote to the correct surface.

## Promotion surfaces

| Surface | Use |
| --- | --- |
| Private project context | Local or internal operating knowledge. |
| Public docs | Stable guidance that can be shared openly. |
| Free templates | Sample material that helps users understand the system. |
| Paid templates | Licensed material that should be distributed intentionally. |
| Product backlog | Repeated pain that may justify future platform work. |

## Review criteria

Review should ask:

- Is this accurate?
- Is the source or lineage clear?
- Is the audience clear?
- Is it current enough to publish?
- Does it belong in public docs, a template package, or private context?
- Is the language operational rather than inflated?

## Practical constraint

The workflow should stay lighter than the work it protects.

For now, GitHub pull requests, changelog entries, and session handoffs are enough
to preserve the habit. A product workflow can come later if teams repeat this
often enough.

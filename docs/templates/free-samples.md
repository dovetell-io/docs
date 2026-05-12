---
title: Free samples
description: Free samples should teach the pattern without replacing the paid package.
---

Free samples should be useful enough to build trust and limited enough to keep
the paid package meaningful.

Use this page after [Get started with the core loop](/guides/get-started-core-loop)
when you want a concrete starting point.

Good free samples:

- show the shape of the template
- use fake or private-safe examples
- explain when to use the template
- include one clear next step
- avoid unsupported product claims

Free samples should not:

- expose private strategy
- include full paid package contents
- imply that draft material is canonical
- create confusion about licensing

## Recommended free surface

Start with:

- one context loop primer
- one core checklist
- one minimal sample context file
- one short guide that points to the paid package

This gives buyers a real taste without turning the public docs into the entire
product.

## Best first free sample

The strongest first sample is a minimal repo context starter:

- a one-page context loop primer
- a core setup checklist
- a minimal `manifest.md`
- a minimal `session-handoff.md`
- a minimal `tasks.md`
- one prompt an agent can run to adapt the files to a repo

This is useful for solo developers and small teams because it solves the
immediate pain: the agent starts with repo-owned context instead of making the
human re-explain everything.

## Agent prompt

Use this with the free sample:

```text
Use the dovetell free sample as a starting point.

Adapt the minimal repo context starter to this repository.
Do not copy sample language blindly.

Requirements:
- preserve the repo's actual role and boundaries
- remove any sample-only content
- keep the setup small
- include a session handoff for the next agent
- explain what changed and what I should review
```

## Choosing the right sample

| Situation | Start with |
| --- | --- |
| Solo developer | Minimal repo context starter |
| Small team | Shared context starter plus handoff template |
| Migration cleanup | Workspace cleanup preview |
| Public repo | Public repo connected-context pointer |
| Package/template work | Template source and promotion checklist |

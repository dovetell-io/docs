---
title: Free samples
description: Clone or download public Dovetell starter samples.
---

Use this page after [Get started with the core loop](/guides/get-started-core-loop)
when you want a concrete starting point.

## Minimal repo context starter

Start here if your assessment recommended the Minimal Repo Context Starter.

This sample gives you a tiny repo-owned context loop:

- `manifest.md`: what the repo is and what counts as truth
- `session-handoff.md`: where the next session should resume
- `tasks.md`: active commitments only
- `decisions.md`: durable decisions and rationale
- `agent-prompt.md`: prompt for adapting the starter to a real repo

Clone or fork the public sample repo:

```sh
git clone https://github.com/dovetell-io/sample.git
```

Start with:

- [Minimal Repo Context Starter on GitHub](https://github.com/dovetell-io/sample/tree/main/minimal-repo-context-starter)
- [Sample repo revisions](https://github.com/dovetell-io/sample/blob/main/REVISIONS.md)

Prefer the repo if you want fork metrics, git history, or a cloneable example.
Use the zip when you just want the files:

<ul>
  <li><a href="/templates/minimal-repo-context-starter.zip">Download the starter zip</a></li>
  <li><a href="/templates/minimal-repo-context-starter/README.md">Starter README</a></li>
  <li><a href="/templates/minimal-repo-context-starter/agent-prompt.md">Agent prompt</a></li>
  <li><a href="/templates/minimal-repo-context-starter/project-context/manifest.md">manifest.md</a></li>
  <li><a href="/templates/minimal-repo-context-starter/project-context/session-handoff.md">session-handoff.md</a></li>
  <li><a href="/templates/minimal-repo-context-starter/project-context/tasks.md">tasks.md</a></li>
  <li><a href="/templates/minimal-repo-context-starter/project-context/decisions.md">decisions.md</a></li>
</ul>

Copy the `project-context/` folder into your repo. If your repo already uses a
folder convention such as `.project-context/`, rename the copied folder to match
that convention.

This is useful for solo developers and small teams because it solves the
immediate pain: the agent starts with repo-owned context instead of making the
human re-explain everything.

## Core setup checklist

1. Identify the repo role.
2. Decide what information is allowed in this repo.
3. Fill in `manifest.md`.
4. Put only active work in `tasks.md`.
5. Record only durable decisions in `decisions.md`.
6. Update `session-handoff.md` before ending the session.
7. Ask your agent what it intentionally did not add.

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

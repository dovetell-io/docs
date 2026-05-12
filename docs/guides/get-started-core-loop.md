---
title: Get started with the core loop
description: Start with the smallest useful context governance loop before adding more structure.
---

Start with the smallest loop that preserves continuity.

```text
Orient -> Work -> Detect drift -> Assess meaning -> Reconcile or accept -> Checkpoint -> Resume
```

If you are asking an agent to set this up for you, send it to
[Agent start checklist](/guides/agent-start-checklist) first.

## Who this is for

Use the core loop when you need:

- AI-assisted work to resume cleanly between sessions
- decisions and priorities to survive context compression
- project memory that lives close to the repo
- enough structure for humans and agents to stay aligned

You do not need multi-repo governance, template fingerprints, or promotion
workflows on day one.

## Core files

A lightweight project context usually starts with:

- `manifest.md`: what the project is and what counts as truth
- `session-handoff.md`: where the next session should resume
- `rank.md`: the few things that matter next
- `tasks.md`: active commitments
- `decisions.md`: durable choices and rationale
- `changelog.md`: what changed, when, and why

Add optional files only when the project has a real need.

## First setup

1. Create a project context folder, such as `.project-context/`.
2. Add the core files that match your workflow.
3. Fill in the project purpose and boundaries.
4. Record only the active tasks that matter now.
5. Capture decisions only when they affect future work.
6. Keep `rank.md` short.

The first setup should feel like an operating surface, not a compliance
exercise.

## Human steps

Decide these before asking an agent to write files:

- whether the repo is public, private, package source, product code, or docs
- what information must never be placed in the repo
- what work needs to resume in the next session
- whether existing docs are canonical or only historical

## Agent prompt

Copy this into your coding agent:

```text
Read this repo and set up the smallest useful dovetell core loop.

Start by reading README.md, AGENTS.md if present, and any existing context
folder. Then propose or create only the minimum context files needed to resume
work safely.

Use these defaults:
- public repos get thin pointers, not private operating context
- private repos may use `.project-context/`
- keep `rank.md` short and pointer-based
- keep `tasks.md` for active work only
- record durable decisions only when they affect future work
- do not add optional files unless the repo clearly needs them

Finish by telling me:
- what repo role you found
- what files you changed
- what I should review
- what you intentionally did not add
```

## Expected output

The first pass should produce a tiny operating surface:

- a manifest or pointer that says what the repo is
- a handoff that says where to resume
- a short task list or explicit note that no active tasks were added
- a short decision log only if durable decisions already exist

## Free sample path

If you want a concrete starting point instead of designing the folder from
scratch, use the [free samples](/templates/free-samples). Start with the minimal
sample context file and core checklist, then adapt them to your repo.

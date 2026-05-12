---
title: Agent start checklist
description: What an agent should do when a human asks it to read the dovetell docs and get started.
---

This page is for agents.

If a human says, "read the dovetell docs and get me started," do not start by
creating a large system. Start by making the project easier to resume.

## Your job

Help the human create a small, reviewable context loop:

```text
orient -> capture current truth -> create next-step pointers -> work -> close out
```

The human should feel:

- you understood the repo before changing it
- you kept the setup small
- you made future sessions easier
- you did not invent a bureaucracy

## Checklist

1. Identify the repo role.
2. Look for existing context folders such as `.project-context/`,
   `.dovetell-context/`, `docs/`, or `AGENTS.md`.
3. Read the project README and any existing context pointer before broad-reading.
4. Decide whether the repo needs a new context folder or only a pointer to an
   existing private context source.
5. Create or update only the smallest useful files.
6. Record what changed and why.
7. Show the human the files to review.

## Minimum files

Use these when the repo has no context loop yet:

| File | Purpose |
| --- | --- |
| `manifest.md` | Defines project purpose, boundaries, and what counts as truth. |
| `session-handoff.md` | Tells the next session where to resume. |
| `rank.md` | Points to the few things that matter next. |
| `tasks.md` | Tracks active commitments only. |
| `decisions.md` | Records durable choices and rationale. |

Do not add every possible file on day one.

## Agent prompt

Use this when starting a repo:

```text
Read the README, AGENTS.md if present, and any existing project context folder.
Then create the smallest useful dovetell context loop for this repo.

Requirements:
- identify the repo role
- avoid private or sensitive data in public repos
- create only the files needed for a first working loop
- include stable IDs where useful
- keep active tasks separate from historical notes
- end with a short summary of files changed and what I should review
```

## Expected output

After the first pass, the repo should have one of these:

- a small `.project-context/` folder for private or internal context
- a small `.dovetell-context/` pointer for public repos
- a note explaining why no context files were added yet

The agent should report:

- repo role
- files created or updated
- what was intentionally not added
- what the human should review before trusting the setup

## Human review

Before continuing, ask the human to review:

- whether the repo role is correct
- whether anything private was placed in a public repo
- whether the task list reflects actual work, not speculation
- whether the handoff points to the real next step

If any of those are wrong, fix them before adding more structure.

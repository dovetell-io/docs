---
title: What is dovetell?
description: dovetell helps AI-assisted software teams preserve decisions, context, and operating knowledge across tools and sessions.
---

dovetell helps AI-assisted software teams preserve working context.

When teams use AI tools to move quickly, important information gets scattered:
decisions in chat threads, assumptions in someone's head, implementation notes
in pull requests, and docs that fall behind the work. dovetell exists to reduce
that context debt.

In one sentence:

> dovetell captures decisions, aligns intent, and helps teams avoid answering
> the same questions twice.

## What dovetell is

dovetell is a context governance system for teams using tools such as Codex,
Claude Code, Cursor, GitHub Copilot, and ChatGPT.

It helps teams:

- preserve decisions and rationale
- keep project context close to the repo
- distinguish public documentation from private operating context
- review drift before it becomes expensive
- make reusable templates from repeated work

## What dovetell is not

dovetell is not a replacement for your issue tracker, docs site, code review
tool, or AI assistant.

It is also not a mandate to install heavy process. The goal is to start with a
small operating surface and add governance only when the work has earned it.

## Core idea

The operating loop is:

```text
Orient -> Work -> Detect drift -> Assess meaning -> Reconcile or accept -> Checkpoint -> Resume
```

That loop is intentionally plain. It is meant to keep humans and agents aligned
without turning documentation into ceremony.

## Current stage

dovetell documentation is early and evolving. Public docs should explain stable
concepts, while package source material and paid templates should remain
versioned, reviewed, and traceable.

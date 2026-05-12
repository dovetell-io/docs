# Minimal Repo Context Starter

Use this starter when a repo needs enough context for an AI-assisted work
session to resume cleanly, but not a full governance system.

It creates a small context loop:

```text
orient -> work -> capture decisions -> update tasks -> hand off
```

## Files

| File | Purpose |
| --- | --- |
| `project-context/manifest.md` | Defines the repo role, boundaries, and source of truth. |
| `project-context/session-handoff.md` | Tells the next human or agent where to resume. |
| `project-context/tasks.md` | Tracks active work only. |
| `project-context/decisions.md` | Records durable decisions that future sessions should know. |
| `agent-prompt.md` | Prompt for adapting this starter to a real repo. |

## How to use

1. Copy `project-context/` into your repo.
2. Rename it if your repo already uses a context folder convention, such as
   `.project-context/`.
3. Replace sample text with facts from your repo.
4. Keep private strategy out of public repos.
5. Ask your agent to read `agent-prompt.md` before expanding the structure.

## Keep it small

Do not add extra files until there is a real coordination need. The point is to
make the next session easier, not to create a paperwork garden.

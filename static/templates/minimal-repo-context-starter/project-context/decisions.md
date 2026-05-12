# decisions.md

Record durable decisions that future humans or agents should preserve.

Do not use this file for every preference, idea, or passing discussion. Use it
when changing the decision later would affect implementation, product behavior,
operations, or trust.

## Decision Template

```text
- id: decision-YYYYMMDD-short-name
  date: YYYY-MM-DD
  status: accepted
  decision: Short statement of the decision.
  rationale: Why this is the right choice for now.
  implications:
    - What future sessions should preserve.
    - What tradeoff this creates.
```

## Decisions

- id: decision-sample-repo-owned-context
  - `date`: 2026-05-12
  - `status`: sample
  - `decision`: Keep project context in repo-owned Markdown.
  - `rationale`: The repo should remain readable and useful even without a
    specific AI tool or SaaS product.
  - `implications`:
    - Agents should read these files before broad implementation work.
    - Private or sensitive context should not be added to public repos.

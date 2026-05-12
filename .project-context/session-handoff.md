# session-handoff.md
# dovetell docs - current session handoff

---

session: codex-9900dfb7
date: 2026-05-11T20:45:00Z
scope: Converted the docs repo from a hand-built one-page site into a Docusaurus docs-as-code scaffold, added a lightweight docs architecture plan, restored the assessment and planned platform direction from the original site, then partitioned strategic planning notes out of the public publish path.
files-touched:
  - README.md
  - package.json
  - package-lock.json
  - docusaurus.config.js
  - sidebars.js
  - src/css/custom.css
  - src/pages/index.md
  - docs/intro/what-is-dovetell.md
  - docs/intro/context-debt.md
  - docs/intro/docs-as-code.md
  - docs/guides/get-started-core-loop.md
  - docs/guides/checkpoint-vs-closeout.md
  - docs/guides/public-repo-connected-context.md
  - docs/assessment/overview.md
  - docs/assessment/maturity-model.md
  - docs/assessment/how-it-works.md
  - docs/assessment/scoring.md
  - docs/assessment/track-improvement.md
  - .project-context/direction/assessment/tracking-over-time.md
  - docs/framework/context-governance-schema.md
  - docs/framework/context-governance-rings.md
  - docs/framework/reconciliation.md
  - .project-context/direction/platform/overview.md
  - .project-context/direction/platform/roles.md
  - .project-context/direction/platform/review-workflow.md
  - .project-context/direction/platform/capabilities.md
  - docs/templates/overview.md
  - docs/templates/free-samples.md
  - docs/templates/paid-templates.md
  - docs/reference/glossary.md
  - docs/reference/privacy.md
  - docs/reference/decisions.md
  - .project-context/direction/docs-architecture.md
  - static/CNAME
  - .github/workflows/deploy.yml
  - .gitignore
  - .project-context/manifest.md
  - .project-context/session-handoff.md
decisions-made:
  - Use Docusaurus as the first proper docs site scaffold.
  - Keep `dovetell-assets` as source/staging and `docs` as the public docs surface.
  - Treat GitHub-gated paid access as optional and operationally heavier than Gumroad delivery.
  - Use trailing-slash static routes for safer GitHub Pages behavior.
  - Override `serialize-javascript` to `7.0.5` to clear the transitive audit finding without forcing a Docusaurus downgrade.
  - Keep platform material clearly marked as planned until product workflows exist.
  - Keep strategic planning notes in `.project-context/direction` so they stay in Git but are not built into the public docs site.
tasks-added: none
tasks-completed:
  - Convert docs repo scaffold.
  - Draft lightweight docs architecture plan.
  - Restore assessment documentation as a first-class docs section.
  - Restore planned platform direction from the original site.
  - Partition platform direction, docs architecture, and assessment product-signal details out of the public docs tree.
  - Install npm dependencies.
  - Verify production build.
  - Clear npm audit findings.
rules-added: none
boundary-conditions-triggered: none
pending:
  - Decide exact paid GitHub access model before promising it to buyers.
  - Promote reviewed package docs from `dovetell-assets` into public or paid docs.
  - Decide where the live assessment itself should live relative to the public docs site.
next-session-start-here:
  Start by reviewing the public sidebar flow and deciding whether `Templates` should come before or after `Framework`. Use `.project-context/direction` for strategic planning notes that should remain in Git but not appear on the public site.

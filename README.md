# dovetell docs

Public documentation for [dovetell](https://dovetell.io).

Live site: [docs.dovetell.io](https://docs.dovetell.io)

This repo is the durable public docs surface for dovetell. It is built as a
Docusaurus docs-as-code site and published to GitHub Pages.

## Source boundaries

Use this repo for public, reviewed documentation.

Use `dovetell-io/dovetell-assets` for source assets, package candidates,
templates, schemas, and paid-package staging material before promotion.

Do not copy private strategy, customer details, credentials, internal launch
notes, or unreviewed package source into this repo.

## Local development

```bash
npm install
npm run start
```

Build the static site:

```bash
npm run build
```

## Structure

```text
docs/
  intro/          concepts and positioning
  guides/         task-oriented public guides
  framework/      context governance explanations
  templates/      public and paid template guidance
  reference/      glossary, privacy, decisions
  architecture/   docs system architecture
```

## Style

Write public docs in clear, direct, task-oriented Markdown. Prefer short pages,
descriptive headings, private-safe examples, and reviewed claims.

## Related

- [dovetell.io](https://dovetell.io)
- [dovetell-io/docs](https://github.com/dovetell-io/docs)
- `dovetell-io/dovetell-assets` source assets repo

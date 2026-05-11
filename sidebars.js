// @ts-check

const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'intro/what-is-dovetell',
        'intro/context-debt',
        'intro/docs-as-code',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/get-started-core-loop',
        'guides/checkpoint-vs-closeout',
        'guides/public-repo-connected-context',
      ],
    },
    {
      type: 'category',
      label: 'Assessment',
      collapsed: false,
      items: [
        'assessment/overview',
        'assessment/maturity-model',
        'assessment/how-it-works',
        'assessment/scoring',
        'assessment/tracking-over-time',
      ],
    },
    {
      type: 'category',
      label: 'Framework',
      collapsed: false,
      items: [
        'framework/context-governance-schema',
        'framework/context-governance-rings',
        'framework/reconciliation',
      ],
    },
    {
      type: 'category',
      label: 'Platform Direction',
      collapsed: false,
      items: [
        'platform/overview',
        'platform/roles',
        'platform/review-workflow',
        'platform/capabilities',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      collapsed: false,
      items: [
        'templates/overview',
        'templates/free-samples',
        'templates/paid-templates',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/glossary',
        'reference/privacy',
        'reference/decisions',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/docs-architecture',
      ],
    },
  ],
};

module.exports = sidebars;

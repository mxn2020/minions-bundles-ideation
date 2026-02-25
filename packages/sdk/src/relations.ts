/**
 * @module minions-bundles-ideation/relations
 * Relation definitions for Minions Bundle: Ideation.
 */

export const bundleRelations = [
  { from: 'featureSpec', relation: 'specifies', to: 'idea' },
  { from: 'roadmapDoc', relation: 'plans', to: 'idea' },
];


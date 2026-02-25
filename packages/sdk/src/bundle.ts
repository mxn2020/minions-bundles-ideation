/**
 * @module minions-bundles-ideation/bundle
 * MinionType definitions and imports for Minions Bundle: Ideation.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const ideaType: MinionType = {
  id: 'bundle-ideation-idea',
  name: 'Idea',
  slug: 'idea',
  description: 'An unstructured thought or brainstorm',
  icon: '💡',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'rawNotes', type: 'string', label: 'rawNotes' },
  ],
};

export const featureSpecType: MinionType = {
  id: 'bundle-ideation-featureSpec',
  name: 'FeatureSpec',
  slug: 'featureSpec',
  description: 'A detailed requirement document for a specific feature',
  icon: '📝',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'ideaId', type: 'string', label: 'ideaId' },
    { name: 'requirements', type: 'string', label: 'requirements' },
    { name: 'constraints', type: 'string', label: 'constraints' },
  ],
};

export const roadmapDocType: MinionType = {
  id: 'bundle-ideation-roadmapDoc',
  name: 'RoadmapDoc',
  slug: 'roadmapDoc',
  description: 'A timeline and goal-oriented planning document',
  icon: '🗺️',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'ideaId', type: 'string', label: 'ideaId' },
    { name: 'timeline', type: 'string', label: 'timeline' },
    { name: 'goals', type: 'string', label: 'goals' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  ideaType,
  featureSpecType,
  roadmapDocType,
];


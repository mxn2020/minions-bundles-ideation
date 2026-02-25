/**
 * @module minions-bundles-ideation/views
 * Named query filters for Minions Bundle: Ideation.
 */

export const bundleViews = {
  activeIdeas: {
    description: 'Ideas currently in the brainstorming phase',
    type: 'idea',
    filter: {
      "status": "raw"
},
  },
};


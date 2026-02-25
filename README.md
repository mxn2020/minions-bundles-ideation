# Minions Bundle: Ideation

Brainstorming and early-stage planning bundle — ideas, feature specs, roadmaps

This is a Minions ecosystem **bundle**. Bundles are curated assemblies of MinionTypes, relations, and views designed for a specific domain.

## Installation

\`\`\`bash
npm install minions-bundles-ideation
# or
pnpm add minions-bundles-ideation
# or
yarn add minions-bundles-ideation
\`\`\`

## Usage

\`\`\`typescript
import { bundleTypes, bundleRelations, bundleViews } from 'minions-bundles-ideation';
import { Minions } from 'minions-sdk';

// Initialize a client with this bundle's types and relations
const core = new Minions();

for (const type of bundleTypes) {
    core.registry.register(type);
}

// Ensure relations exist
for (const rel of bundleRelations) {
    // Implement relation registration logic here if applicable
}
\`\`\`

## AI Agent Skills

See [SKILLS.md](./SKILLS.md) for instructions on how AI agents should interact with this bundle's schema.

## License

MIT - Copyright (c) 2026 Mehdi Nabhani

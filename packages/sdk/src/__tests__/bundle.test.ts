import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the ideaType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'idea');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Idea');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('description');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('rawNotes');
    });

    it('should define the featureSpecType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'featureSpec');
        expect(type).toBeDefined();
        expect(type?.name).toBe('FeatureSpec');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('ideaId');
        expect(fieldNames).toContain('requirements');
        expect(fieldNames).toContain('constraints');
    });

    it('should define the roadmapDocType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'roadmapDoc');
        expect(type).toBeDefined();
        expect(type?.name).toBe('RoadmapDoc');
        expect(type?.schema.length).toBe(4);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('ideaId');
        expect(fieldNames).toContain('timeline');
        expect(fieldNames).toContain('goals');
    });
});

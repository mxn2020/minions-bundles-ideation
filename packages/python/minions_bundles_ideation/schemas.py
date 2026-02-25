"""
Minions Bundle: Ideation SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Ideation.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Idea(MinionType):
    """An unstructured thought or brainstorm"""
    slug = "idea"
    icon = "💡"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="description", type="str", label="description"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="rawNotes", type="str", label="rawNotes"),
    ]


class FeatureSpec(MinionType):
    """A detailed requirement document for a specific feature"""
    slug = "featureSpec"
    icon = "📝"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="ideaId", type="str", label="ideaId"),
        FieldDefinition(name="requirements", type="str", label="requirements"),
        FieldDefinition(name="constraints", type="str", label="constraints"),
    ]


class RoadmapDoc(MinionType):
    """A timeline and goal-oriented planning document"""
    slug = "roadmapDoc"
    icon = "🗺️"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="ideaId", type="str", label="ideaId"),
        FieldDefinition(name="timeline", type="str", label="timeline"),
        FieldDefinition(name="goals", type="str", label="goals"),
    ]


BUNDLE_TYPES = [Idea, FeatureSpec, RoadmapDoc]

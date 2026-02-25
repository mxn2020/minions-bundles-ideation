"""
Minions Bundle: Ideation Python SDK

Brainstorming and early-stage planning bundle — ideas, feature specs, roadmaps
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Bundle: Ideation.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *

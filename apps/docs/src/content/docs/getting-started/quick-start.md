---
title: Quick Start
description: "Get up and running with Minions Bundle: Ideation in minutes"
---

## TypeScript

```typescript
import { createClient } from '@minions-bundles-ideation/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_bundles_ideation import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
minions-bundles-ideation info
```

+++
title = "TIL docstrings for Enums are placed below the attribute in python"
date = "2025-07-28T11:31:36+02:00"

tags = ["development"]
+++

When you're dealing with LLM's structured output, sometimes adding doctrings
help the structured decoding process.

In python, docstrings are used when serializing the Pydantic/dataclasses to JSON before they
can be consumed by the LLM API.

I did not know, but for Enums, the docstrings are placed below the attribute, not above it.

```python
from enum import Enum

class Status(Enum):
    """Represents a system status."""

    PENDING = "pending"
    """The task is waiting to be executed."""

    SUCCESS = "success"
    """The task completed successfully."""

# --- Accessing the docstrings ---
print(f"Docstring for PENDING: '{Status.PENDING.__doc__}'")
print(f"Docstring for SUCCESS: '{Status.SUCCESS.__doc__}'")
```

Will result in:

```plaintext
Docstring for PENDING: 'The task is waiting to be executed.'
Docstring for SUCCESS: 'The task completed successfully.'
```

That's it. Funny stuff.

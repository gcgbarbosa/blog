+++
title = "Getting started with Google ADK"
date = "2025-07-29T19:19:45+02:00"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = ["generative-ai"]
+++

I was trying to get started with the [Google ADK](https://google.github.io/adk-docs/agents/llm-agents/)
but I felt like the documentation lacked a straight forward example to just copy and run.

This is what I tried to do here.

```sh
uv init adk
cd adk
uv add google-adk
uv sync
```

And you're good to go in terms of boilerplate.

First, import the imports:

```python
import asyncio
import os

from google.adk.agents import Agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types
```

Good. Then you will need the Agent:

```python
os.environ["GOOGLE_GENAI_USE_VERTEXAI"] = "FALSE"
os.environ["GOOGLE_API_KEY"] = "PASTE_YOUR_ACTUAL_API_KEY_HERE"

agent = Agent(
    name="agent name",
    model="gemini-2.0-flash",
    description="agent description",
    instruction="system prompt",
    output_key="response",
)
```

Then you will need the session:

```python
app_name = "gcgbarbosa's blog"
session_service = InMemorySessionService()

user_id = "user_id"
session_id = "session_id"

session_service.create_session(
    app_name=app_name,
    user_id=user_id,
    session_id=session_id,
)
```

The last thing you need is the runner:

```python
Runner(
    agent=agent,
    app_name=app_name,
    session_service=session_service,
)
```

Now you can receive a message from the user or another agent and run it trough the agent that you just created:

```python

async def run_agent(message: str):
  content = types.Content(role="user", parts=[types.Part(text=message)])

  # Execute the agent and get the final response
  final_response = ""
  async for event in self.runner.run_async(
      user_id=user_id,
      session_id=session_id,
      new_message=content,
  ):
      if event.is_final_response() and event.content and event.content.parts:
          final_response = event.content.parts[0].text
          break

  return final_response

response = asyncio.run(run_agent("Hello, how are you?"))
```

This is the simplest agent that you can create.
It does not even use tools (is it really an agent if it does not use tools? probably not).

The documentation shows how to use tools anyways: [ADK
Quickstart](https://google.github.io/adk-docs/get-started/quickstart/#agentpy).

Good luck!

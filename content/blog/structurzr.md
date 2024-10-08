+++
title = "Setting Up Structurizr for Local Authoring: A Step-by-Step Guide"
description = "Learn how to set up Structurizr for local authoring, including creating DSL files, running Structurizr Lite with Docker, and installing the Structurizr CLI. Follow this comprehensive guide to streamline your software architecture documentation workflow."
date = 2024-08-16T11:08:41-03:00
tags = [
  "productivity",
  "documentation"
]
+++

## Workflow

Structurizr has a [workflow](https://docs.structurizr.com/lite/workflow)
suggestion.
We are going to follow the `local authoring` step by step.

### Creating the dsl file

Create a folder named `strzr` and inside it add a file named `strzr.dsl`.

Add the example file:

```plaintext
workspace {
    model {
        u = person "User"
        ss = softwareSystem "Software System"

        u -> ss "Uses"
    }
    views {
        systemContext ss {
            include *
            autolayout lr
        }
    }
}
```

### Getting Structurizr Lite running

Pull the image:

```bash
docker pull structurizr/lite
```

Run a container from the image:

```bash
docker run -it --rm -p 8080:8080 -v `pwd`:/usr/local/structurizr structurizr/lite
```

Then open <http://localhost:8080/workspace/diagrams>

You should see this:

![structurizr](/posts/structurizr/structurizr.png)

Voila.

## How to install the CLI

I like CLI's and I thought it would be nice to have it working.
But I don't like compiling things from source.
I'd rather get them compiled if I can.

Download the `structurizr-cli.zip` from
<https://github.com/structurizr/cli/releases>.

Extract the zip and move it to `/opt/structurizr`.Then add it to your `rc` file.
I added this to my `.zshrc`:

```bash
# add structurizr
export PATH="/opt/structurizr:$PATH"
```

After reloading your session
(by for example closing and re-opening the terminal),
you can call `which structurizr` and it should print:

```plaintext
/opt/structurizr/structurizr
```

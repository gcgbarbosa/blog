+++
title = "Getting Started with Mise"
date = "2025-01-13T09:39:56-03:00"

#
# description is optional
#
description = "Learn how to manage tasks, environment variables, and devtools efficiently using Mise."

tags = [
  "development",
  "fullstack",
]
+++

## What is `mise` and how to use it

Mise is a tool for managing tasks, environment variables, and developer tools across projects.

### Install and activate `mise`

To install Mise, run the following command:

```bash
curl https://mise.run | sh
```

Next, add Mise to your shell configuration. For `zsh`:

```bash
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc
```

### Using `mise`

#### Install a Global Tool

To install Node.js version 22 globally:

```bash
mise use --global node@22
```

#### Check Tool Version

You can verify the installed version using:

```bash
mise exec -- node -v
# Output: v22.x.x
```

If Mise is activated, you can also run the command directly:

```bash
node -v
# Output: v22.x.x
```

### Configuration Files

Mise uses a configuration file to manage tools globally.
The global configuration file is located at `~/.config/mise/config.toml`.
This is an example configuration:

```toml
[tools]
node = "22"
```

Mise also keeps local configuration files in the project directory (`mise.toml`).

## Devtools

To use a specific tool version in a project directory, navigate to the project and run:

```bash
cd my-project
mise use node@22
```

This command ensures the correct version of Node.js (v22) is used within the project.

## Environment Variables

You can define project-specific environment variables with Mise. For example:

```bash
mise set NODE_ENV=development
```

This sets the `NODE_ENV` variable to `development` for the current project.

## Tasks

Mise allows you to define tasks in a `mise.toml` file.
Here's an example `mise.toml` file:

```toml
[tasks.build]
description = "Build the CLI"
run = "cargo build"
```

To run the `build` task, execute:

```bash
mise run build
```

That's it!

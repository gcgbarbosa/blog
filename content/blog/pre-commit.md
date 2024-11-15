+++

title = "Walk trough pre-commit and enforcing conventional commits"
date = "2024-10-14T00:11:02+01:00"
description = "Learn how to use pre-commit to automate code checks."
tags = ["git", "productivity", "development"]

+++

## Pre commit

Pre-commit is a framework that allows you to run automated checks.
You can run like code formatting and linting on your code before
you commit it to a Git repository.

### How to add pre-commit to your project

Install pre-commit with pip:

```bash
pip install pre-commit
```

Generate a sample configuration file and save it as `.pre-commit-config.yaml`:

```bash
pre-commit sample-config > .pre-commit-config.yaml
```

### How to add commit-lint to enforce conventional commits

Conventional commits is a specification for writing commit messages
with a structured format that helps automate changelog generation and semantic versioning.

Your `.pre-commit-config.yaml` file should look like this:

```plaintext
❯ cat .pre-commit-config.yaml
# See https://pre-commit.com for more information
# See https://pre-commit.com/hooks.html for more hooks
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v3.2.0
    hooks:
    -   id: trailing-whitespace
    -   id: end-of-file-fixer
    -   id: check-yaml
    -   id: check-added-large-files
```

You are going to add the following to the end of the file:

```plaintext
-   repo: https://github.com/compilerla/conventional-pre-commit
    rev: v2.1.1
    hooks:
    -   id: conventional-pre-commit
        stages: [commit-msg]
        args: [] # optional: list of Conventional Commits types to allow e.g. [feat, fix, ci, chore, test]
```

This link will give you the basics of the default setup:
[config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

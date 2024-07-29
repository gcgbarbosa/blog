+++
title = "The bare minimum to get started with Typst"
date = "2024-07-27"
description = "How to write using Typst"
tags = [
    "util",
    "writing"
]
+++

Typst is a new markup-based typesetting system for the sciences
It was designed to be the middle ground between `Latex` and `Microsoft Word`.

## Installation

The best way to install is using cargo:

```sh
cargo install --locked typst-cli
```

You can learn how to install `cargo` [here](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## Writing your first document

This code:

```typst
# hello_world.typ
= Hello World
This is a
hello world.
```

After running:

```sh
typst compile hello_world.typ
```
Should render `hello_world.pdf`:

![](/typst/hello_world.png)

## Where do I go from here?

Their github page is [here](https://github.com/typst/typst).
Good luck :)


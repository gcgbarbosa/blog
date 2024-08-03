+++
title = "The bare minimum to get started with NvChad and Neovim"
date = "2024-08-02"
description = "What George think about getting started with with NvChad and Neovim"
tags = [
    "util",
]
+++

## Installing Neovim

I like to go with the easiest, which is getting the `.appimage` from neovim's [https://github.com/neovim/neovim/releases/](https://github.com/neovim/neovim/releases/).
Grab the latest and move it to `/usr/local/bin/neovim`.

## Installing NvChad

Run:

```sh
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
```

## Adding plugins to NvChad

NvChad uses `Lazy` to manage plugins.

Add the file `.config/nvim/lua/plugins/neogit.lua`.

Inside the file, add:

```lua
local plugins = {
  {
    lazy = false,
    "NeogitOrg/neogit",
    dependencies = {
      "nvim-lua/plenary.nvim",         -- required
      "sindrets/diffview.nvim",        -- optional - Diff integration

      -- Only one of these is needed, not both.
      "nvim-telescope/telescope.nvim", -- optional
      -- "ibhagwan/fzf-lua",              -- optional
    },
    config = true
  }
}

return plugins
```

## Changing keymaps

Edit the `.config/nvim/lua/mappings.lua`:

As an example, I added `Neogit` to run with `SPC g g`.

```lua
map("n", "<leader>gg", "<cmd> Neogit <cr>")
```

### Default maps that you should know

- `SPC f f`: Fuzzy find all files in the current directory 

## Treesitter

The goal of `nvim-treesitter` is to offer a straightforward and user-friendly interface for integrating `tree-sitter` into Neovim, along with basic functionalities such as syntax highlighting.

### How to enable

Edit `.conf/nvim/lua/plugins/init.vim` and enable:

```lua
-- [...]
    {
        "nvim-treesitter/nvim-treesitter",
        opts = {
            ensure_installed = {
               "vim", "lua", "vimdoc", "html", "css", "python"
            },
        },
    },
--[...]
```

## Mason

Mason is a Neovim plugin that provides an integrated way
to manage external dependencies
like LSP servers, linters, and formatters directly from Neovim.


### Adding `python-lsp-server`

As an example we are going to install [https://github.com/python-lsp/python-lsp-server](python-lsp-server).

Edit the file `.config/nvim/lua/configs/lspconfig.lua`.
We need to add `pylsp` to local servers:

```lua
local servers = { "html", "cssls", "pylsp" }
```

Lets also add an example configuration. Append the 

```lua
lspconfig.pylsp.setup {
  settings = {
    pylsp = {
      plugins = {
        pycodestyle = {
          maxLineLength = 125,
        }
      }
    }
  }
}
```

We are setting the maximum line length to 125.

That's it.
You just got started with `nvim` and `NvChad`.


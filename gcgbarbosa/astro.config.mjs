// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import expressiveCode from 'astro-expressive-code';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // type: ignore
  },

  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },

  integrations: [expressiveCode({
    themes: ['catppuccin-mocha', 'dark-plus'],      // light/dark out of the box
    defaultProps: {},                 // wrap long lines by default (optional)
    // Make code themes follow your DaisyUI theme (data-theme="dark|light"):
    customizeTheme(theme) {
      theme.name = theme.type; // renames to 'dark' or 'light'
    },
    // frames: { showCopyToClipboardButton: true } // on by default
  }), mdx()],
});

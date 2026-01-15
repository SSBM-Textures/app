# SSBM Textures

Web platform for Super Smash Bros. Melee texture modifications. Built to organize, index, and preserve community-created assets.

## Tech Stack

- **Frontend:** [Svelte 5](https://svelte.dev) (Runes, Bits UI, Lucide)
- **Backend:** [Convex](https://convex.dev) (Real-time Database & File Storage)
- **Runtime:** [Bun](https://bun.sh)
- **Styling:** [UnoCSS](https://unocss.dev)
- **Tooling:** [Biome](https://biomejs.dev) (Linting/Formatting), [Runed](https://runed.dev)

## Development Setup

### Prerequisites
- **[Bun](https://bun.com/)** 

### Installation
```bash
# Install dependencies
bun install

# Start the Convex backend
bunx convex dev

# Start the Svelte 5 dev server
bun run dev
```

## Editor Configuration

To ensure consistent formatting and Svelte 5 Rune support across our team, please configure your editor as follows.

### Visual Studio Code
1. Required Extensions:
   - [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) (Ensure v5+ for Rune support)
   - [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) (Enforced formatter/linter)
   - [Convex](https://marketplace.visualstudio.com/items?itemName=convex.convex) (Backend integration)

2. Workspace Settings (`.vscode/settings.json`):
```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": "explicit",
    "source.fixAll.biome": "explicit"
  },
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "svelte.plugin.svelte.compilerWarnings": {
    "runes_scope": "ignore"
  }
}
```

### Neovim
* **[nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)** – Enables the `svelte-language-server` and `biome` LSP for real-time linting and logic checking.
* **[conform.nvim](https://github.com/stevearc/conform.nvim)** – Orchestrates auto-formatting on save using Biome (enforces project-wide code style).
* **[nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)** – Provides high-fidelity syntax highlighting for Svelte 5 **Runes** (`$state`, `$derived`, etc.).
* **[mason.nvim](https://github.com/mason-org/mason.nvim)** - Easily install and manage LSP servers, DAP servers, linters, and formatters.

#### **Required Parsers**
```vim
:TSInstall svelte typescript javascript css json

# dotfiles

My dotfiles managed by chezmoi and pass.

## Setup

1. Install chezmoi

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- -b $HOME/.local/bin
```

2. Apply dotfiles

```bash
chezmoi init --apply <github-username>
```

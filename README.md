# dotfiles

My dotfiles managed by chezmoi and pass.

## Requirements (macOS)

Xcode Command Line Tools is required (`chezmoi init` needs git).

```bash
xcode-select -p
# /Library/Developer/CommandLineTools
```

If not installed, run:

```bash
xcode-select --install
```

## Setup

Install chezmoi & Apply dotfiles

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply $GITHUB_USERNAME
```

## Manual Setup

See [MANUAL_SETUP.md](./MANUAL_SETUP.md) for additional setup steps.

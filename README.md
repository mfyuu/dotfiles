# dotfiles

macOS dotfiles managed with Nix flakes, nix-darwin, and home-manager.

## Initial Setup

1. Install [Determinate Nix](https://github.com/DeterminateSystems/nix-installer):

   ```bash
   curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
   ```

2. Clone this repository:

   ```bash
   git clone https://github.com/mfyuu/dotfiles.git ~/dev/dotfiles
   ```

3. Apply the nix-darwin configuration (Homebrew will be installed automatically):

   ```bash
   # Replace <hostname> with your machine name (M4Pro, M4Air, etc.)
   sudo nix run nix-darwin -- switch --flake ~/dev/dotfiles#<hostname>
   ```

4. Reload your shell:

   ```bash
   exec zsh
   ```

## Daily Usage

```bash
# Update flake.lock (fetch latest nixpkgs, nix-darwin, home-manager)
nix run .#update

# Build and apply configuration (Homebrew is also updated automatically)
nix run .#switch

# Dry run (build without applying)
nix run .#build
```

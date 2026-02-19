{ lib, ... }:
{
  imports = [
    ./home-manager.nix
    ./homebrew.nix
    ./macos
  ];
  # Determinate Nix manages the daemon, so disable nix-darwin's management
  nix.enable = false;
  # Allow only explicitly listed unfree packages (e.g. vscode)
  nixpkgs.config.allowUnfreePredicate =
    pkg:
    builtins.elem (lib.getName pkg) [
      "vscode"
    ];
  system.primaryUser = "mfyuu";
  system.stateVersion = 6;

  users.users.mfyuu = {
    name = "mfyuu";
    home = "/Users/mfyuu";
  };
}

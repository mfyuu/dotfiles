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

  # nix-darwin's /etc/zshrc runs compinit + bashcompinit + promptinit synchronously (~47ms).
  # These are redundant because our user config handles compinit via zsh-defer and starship replaces promptinit.
  programs.zsh.enableGlobalCompInit = false;
  programs.zsh.enableBashCompletion = false;
  programs.zsh.promptInit = "";

  users.users.mfyuu = {
    name = "mfyuu";
    home = "/Users/mfyuu";
  };
}

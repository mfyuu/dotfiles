{ ... }:
{
  imports = [
    ./home-manager.nix
    ./homebrew.nix
  ];
  # Determinate Nix manages the daemon, so disable nix-darwin's management
  nix.enable = false;
  nixpkgs.config.allowUnfree = true;
  system.primaryUser = "mfyuu";
  system.stateVersion = 6;

  users.users.mfyuu = {
    name = "mfyuu";
    home = "/Users/mfyuu";
  };
}

{ ... }:
{
  imports = [ ./home-manager.nix ];
  # Determinate Nix manages the daemon, so disable nix-darwin's management
  nix.enable = false;
  system.stateVersion = 6;

  users.users.mfyuu = {
    name = "mfyuu";
    home = "/Users/mfyuu";
  };
}

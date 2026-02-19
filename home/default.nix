{ ... }:
{
  imports = [
    ./git.nix
    ./ssh.nix
    ./starship.nix
  ];
  home.stateVersion = "25.11";
}

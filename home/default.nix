{ ... }:
{
  imports = [
    ./git.nix
    ./ssh.nix
  ];
  home.stateVersion = "25.11";
}

{ ... }:
{
  imports = [
    ./git.nix
    ./ssh.nix
    ./shell
  ];
  home.stateVersion = "25.11";
}

{ ... }:
{
  imports = [
    ./git.nix
    ./ssh.nix
    ./shell
    ./ghostty.nix
    ./vscode.nix
    ./cursor.nix
    ./karabiner.nix
  ];
  home.stateVersion = "25.11";
}

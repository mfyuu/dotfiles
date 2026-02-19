{ ... }:
{
  imports = [
    ./packages.nix
    ./git.nix
    ./ssh.nix
    ./shell
    ./ghostty.nix
    ./vscode.nix
    ./cursor.nix
    ./karabiner.nix
    ./claude.nix
    ./codex.nix
    ./aws.nix
  ];
  home.stateVersion = "25.11";
}

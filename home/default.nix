{ ... }:
{
  imports = [
    ./pkgs.nix
    ./git.nix
    ./gh.nix
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

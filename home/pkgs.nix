{ pkgs, ... }:
{
  # zoxide, eza, fzf, direnv, starship are managed by programs.* modules (home/shell/*.nix)
  # gh is managed by programs.gh (home/gh.nix)
  # vscode is managed by programs.vscode (home/vscode.nix)
  home.packages = with pkgs; [
    # Language runtimes & package managers
    nodejs
    go
    pnpm
    yarn
    bun
    deno
    # CLI tools
    awscli2
    bat
    fd
    ripgrep
    ni
    turbo
    fastfetch
    lefthook
  ];
}

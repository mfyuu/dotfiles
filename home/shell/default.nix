{ ... }:
{
  imports = [
    ./zsh.nix
    ./starship.nix
    ./zoxide.nix
    ./direnv.nix
    ./eza.nix
    ./fzf.nix
  ];

  programs.zsh.profileExtra = ''
    eval "$(/opt/homebrew/bin/brew shellenv)"
  '';

  home.sessionPath = [
    "$HOME/bin"
    "$HOME/.local/bin"
  ];

  home.sessionVariables = {
    EDITOR = "vim";
    GH_PAGER = "less -RFX";
    PAGER = "less -RFX";
    HOMEBREW_FORBIDDEN_FORMULAE = "node npm pnpm yarn bun deno go awscli bat direnv eza fastfetch fd fzf gh lefthook mise starship turbo zoxide claude ripgrep";
    ZENO_HOME = "$HOME/.config/zeno";
  };
}

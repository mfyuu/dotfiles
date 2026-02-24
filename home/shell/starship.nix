{ ... }:
{
  programs.starship = {
    enable = true;
    enableZshIntegration = false; # handled via cache_eval in zsh.nix
    settings = builtins.fromTOML (builtins.readFile ./starship.toml);
  };
}

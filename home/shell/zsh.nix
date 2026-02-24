{ ... }:
{
  programs.zsh = {
    enable = true;
    enableCompletion = true;
    autosuggestion.enable = true;
    syntaxHighlighting.enable = true;

    shellAliases = {
      tree = "eza -T -a -I 'node_modules|.git|.cache' --icons";
      warp = "open -a Warp";
      ccusage = "bunx ccusage@latest";
      difit = "bunx difit@latest";
      biome-config = "bunx @mfyuu/biome-config";
    };

    initContent = ''
      # GPG_TTY (dynamic value, cannot use sessionVariables)
      export GPG_TTY=$TTY

      # brew completions (gh, etc.)
      if type brew &>/dev/null; then
        FPATH="$(brew --prefix)/share/zsh/site-functions:''${FPATH}"
      fi

      # zoxide interactive aliases
      [[ -o interactive ]] && alias cd='z'
      [[ -o interactive ]] && alias cdi='zi'

      # History search with arrow keys
      autoload -Uz up-line-or-beginning-search down-line-or-beginning-search
      zle -N up-line-or-beginning-search
      zle -N down-line-or-beginning-search
      bindkey "^[[A" up-line-or-beginning-search
      bindkey "^[[B" down-line-or-beginning-search

      # Make word deletion stop at path separators
      WORDCHARS=""
    '';
  };
}

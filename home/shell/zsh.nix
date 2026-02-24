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

      # completion options
      zmodload -i zsh/complist
      unsetopt menu_complete
      setopt auto_menu complete_in_word always_to_end always_last_prompt auto_cd
      zstyle ':completion:*:*:*:*:*' menu select

      # clear completion list on backspace
      function _backward-delete-char-clear() {
        zle backward-delete-char
        zle reset-prompt
      }
      zle -N _backward-delete-char-clear
      bindkey '^?' _backward-delete-char-clear

      # custom functions
      tp() {
        if [ -z "$1" ]; then
          printf "Command: \e[90mtp\e[0m\n"
          printf "Description: \e[32mCreate a file and its parent directories in one step if they don't exist.\e[0m\n"
          printf "Usage: \e[90mtp <file-path>\e[0m\n"
          printf "Example: \e[90mtp /path/to/your/file.txt\e[0m\n"
        else
          mkdir -p -- "$(dirname -- "$1")" && touch -- "$1"
        fi
      }

      mcd() {
        if [ -z "$1" ]; then
          printf "Command: \e[90mmcd\e[0m\n"
          printf "Description: \e[32mCreate a directory and move into it in one step.\e[0m\n"
          printf "Usage: \e[90mmcd <dir-name>\e[0m\n"
          printf "Example: \e[90mmcd /path/to/your/directory\e[0m\n"
        else
          mkdir -p -- "$1" && cd -- "$1"
        fi
      }

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

{ lib, ... }:
{
  xdg.configFile."zeno/config.yml".source = ./zeno-config.yml;

  programs.sheldon = {
    enable = true;
    enableZshIntegration = false;
    settings = {
      shell = "zsh";

      templates = {
        defer = "{{ hooks?.pre | nl }}{% for file in files %}zsh-defer -t 0.0001 source \"{{ file }}\"\n{% endfor %}{{ hooks?.post | nl }}";
      };

      plugins = {
        "00-zsh-defer" = {
          github = "romkatv/zsh-defer";
          hooks.post = ''
            zsh-defer -t 0.001 autoload -Uz compinit
            zsh-defer -t 0.001 compinit
          '';
        };

        "01-zeno" = {
          github = "yuki-yano/zeno.zsh";
          apply = [ "defer" ];
          hooks.post = ''
            zsh-defer bindkey ' ' zeno-auto-snippet
            zsh-defer bindkey '^m' zeno-auto-snippet-and-accept-line
            zsh-defer bindkey '^i' zeno-completion
            zsh-defer bindkey '^r' zeno-history-selection
            zsh-defer bindkey '^x^s' zeno-insert-snippet
          '';
        };

        "02-omz" = {
          github = "ohmyzsh/ohmyzsh";
          dir = "plugins";
          use = [ "{git,git-commit}/*.plugin.zsh" ];
          apply = [ "defer" ];
        };

        "03-zsh-autosuggestions" = {
          github = "zsh-users/zsh-autosuggestions";
          apply = [ "defer" ];
          hooks.post = ''
            ZSH_AUTOSUGGEST_CLEAR_WIDGETS+=(zeno-auto-snippet-and-accept-line)
          '';
        };

        "99-fast-syntax-highlighting" = {
          github = "zdharma-continuum/fast-syntax-highlighting";
          apply = [ "defer" ];
        };
      };
    };
  };

  programs.zsh = {
    enable = true;
    enableCompletion = false;
    shellAliases = {
      tree = "eza -T -a -I 'node_modules|.git|.cache' --icons";
      warp = "open -a Warp";
      ccusage = "bunx ccusage@latest";
      difit = "bunx difit@latest";
      biome-config = "bunx @mfyuu/biome-config";
    };

    initContent = lib.mkMerge [
      # source command override for automatic zcompile
      (lib.mkOrder 200 ''
        function source {
          ensure_zcompiled $1
          builtin source $1
        }
        function ensure_zcompiled {
          local compiled="$1.zwc"
          if [[ -L "$1" ]]; then
            [[ -r "$compiled" ]] && rm -f "$compiled"
            return
          fi
          if [[ ! -r "$compiled" || "$1" -nt "$compiled" ]]; then
            if [[ -w "''${1:h}" ]]; then
              zcompile $1
            fi
          fi
        }
        ensure_zcompiled ~/.zshrc
      '')

      # synchronous config (before sheldon)
      (lib.mkOrder 500 ''
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
      '')

      # sheldon source cache (regenerate when plugins.toml symlink target changes)
      (lib.mkOrder 800 ''
        sheldon_cache="''${XDG_CACHE_HOME:-$HOME/.cache}/sheldon/sheldon.zsh"
        sheldon_toml="''${XDG_CONFIG_HOME:-$HOME/.config}/sheldon/plugins.toml"
        if [[ ! -r "$sheldon_cache" || "$(readlink "$sheldon_toml")" != "$(cat "''${sheldon_cache}.lock" 2>/dev/null)" ]]; then
          mkdir -p "''${sheldon_cache:h}"
          sheldon lock
          sheldon source > "$sheldon_cache"
          readlink "$sheldon_toml" > "''${sheldon_cache}.lock"
        fi
        source "$sheldon_cache"
        unset sheldon_cache sheldon_toml
      '')

      # deferred cleanup: unfunction source override after all deferred operations
      (lib.mkOrder 1500 ''
        zsh-defer zsh-defer unfunction source
      '')
    ];
  };
}

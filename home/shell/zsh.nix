{ pkgs, ... }:
{
  xdg.configFile."zeno/config.yml".source = ./zeno-config.yml;

  programs.zsh = {
    enable = true;
    enableCompletion = true;

    shellAliases = {
      tree = "eza -T -a -I 'node_modules|.git|.cache' --icons";
      warp = "open -a Warp";
      ccusage = "bunx ccusage@latest";
      difit = "bunx difit@latest";
      biome-config = "bunx @mfyuu/biome-config";
    };

    initContent = ''
      # GPG_TTY (動的な値なのでsessionVariablesでは不可)
      export GPG_TTY=$TTY

      # brew補完 (gh等)
      if type brew &>/dev/null; then
        FPATH="$(brew --prefix)/share/zsh/site-functions:''${FPATH}"
      fi

      # zshオプション (Oh My Zsh互換の補完設定)
      zmodload -i zsh/complist
      unsetopt menu_complete
      setopt auto_menu complete_in_word always_to_end always_last_prompt auto_cd
      zstyle ':completion:*:*:*:*:*' menu select

      # backspace時に補完リストをクリア
      function _backward-delete-char-clear() {
        zle backward-delete-char
        zle reset-prompt
      }
      zle -N _backward-delete-char-clear
      bindkey '^?' _backward-delete-char-clear

      # zinit (nixpkgsのzinitを使用)
      source ${pkgs.zinit}/share/zinit/zinit.zsh
      unalias zi 2>/dev/null  # zoxideのziと競合するため

      # zeno.zsh (zinit経由)
      zinit ice depth"1" blockf \
        atload"bindkey ' ' zeno-auto-snippet; \
               bindkey '^m' zeno-auto-snippet-and-accept-line; \
               bindkey '^i' zeno-completion; \
               bindkey '^r' zeno-history-selection; \
               bindkey '^x^s' zeno-insert-snippet"
      zinit light yuki-yano/zeno.zsh

      # Oh My Zsh プラグイン (zinit経由)
      zinit snippet OMZP::git
      zinit snippet OMZP::git-commit

      # 外部プラグイン (zinit経由)
      zinit light zsh-users/zsh-completions
      zinit light zsh-users/zsh-autosuggestions
      ZSH_AUTOSUGGEST_CLEAR_WIDGETS+=(zeno-auto-snippet-and-accept-line)

      # fast-syntax-highlighting (zinit経由、最後に読み込み)
      zinit light zdharma-continuum/fast-syntax-highlighting

      # カスタム関数
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

      # interactive限定alias
      [[ -o interactive ]] && alias cd='z'
      [[ -o interactive ]] && alias cdi='zi'

      # git-wt
      eval "$(git wt --init zsh)"

      git() {
        if [[ "$1" == "wt" ]]; then
          shift
          if [[ $# -eq 0 ]]; then
            local dir=$(command git-wt | fzf --header-lines=1 | awk '{print $1}')
            if [[ -n "$dir" ]]; then
              cd "$dir"
            fi
          elif [[ "$1" == "-a" ]]; then
            git fetch --all --prune
            local branch=$(git branch -a --format='%(refname:short)' | \
              sed 's|^origin/||' | sort -u | grep -v '^HEAD$' | \
              fzf --preview 'git log --oneline -10 {} --')
            if [[ -n "$branch" ]]; then
              command git-wt "$branch"
            fi
          elif [[ "$1" == "-l" ]]; then
            command git-wt
          else
            command git-wt "$@"
          fi
        else
          command git "$@"
        fi
      }

      zstyle ':completion:*:*:git:*' user-commands wt:'worktree manager'

    '';
  };
}

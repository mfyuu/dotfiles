export HOMEBREW_FORBIDDEN_FORMULAE="node npm pnpm yarn claude"

export GPG_TTY=$TTY

# mise（zeno.zsh が Deno を使うため先に読み込む）
eval "$(mise activate zsh)"

# ghの補完
if type brew &>/dev/null; then
  FPATH="$(brew --prefix)/share/zsh/site-functions:${FPATH}"
  autoload -Uz compinit
  compinit
fi

# 補完設定（Oh My Zsh 互換）
zmodload -i zsh/complist
unsetopt menu_complete
setopt auto_menu
setopt complete_in_word
setopt always_to_end
setopt always_last_prompt
setopt auto_cd
# 補完メニューで矢印キー選択を有効化
zstyle ':completion:*:*:*:*:*' menu select

# backspace 時に補完リストをクリア
function _backward-delete-char-clear() {
  zle backward-delete-char
  zle reset-prompt
}
zle -N _backward-delete-char-clear
bindkey '^?' _backward-delete-char-clear

# zinit
ZINIT_HOME="${XDG_DATA_HOME:-${HOME}/.local/share}/zinit/zinit.git"
[ ! -d $ZINIT_HOME ] && mkdir -p "$(dirname $ZINIT_HOME)"
[ ! -d $ZINIT_HOME/.git ] && git clone https://github.com/zdharma-continuum/zinit.git "$ZINIT_HOME"
source "${ZINIT_HOME}/zinit.zsh"

# Starship プロンプト
eval "$(starship init zsh)"

# zinit の zi を無効化（zoxide と競合するため）
unalias zi 2>/dev/null
# 無効化しない場合はcdiを以下のように設定
# alias cdi='zoxide query -i'

# zeno.zsh
export ZENO_HOME="$HOME/.config/zeno"
zinit ice depth"1" blockf \
  atload"bindkey ' ' zeno-auto-snippet; \
         bindkey '^m' zeno-auto-snippet-and-accept-line; \
         bindkey '^i' zeno-completion; \
         bindkey '^r' zeno-history-selection; \
         bindkey '^x^s' zeno-insert-snippet"
zinit light yuki-yano/zeno.zsh

# Oh My Zsh プラグイン
zinit snippet OMZP::git
zinit snippet OMZP::git-commit

# 外部プラグイン
zinit light zsh-users/zsh-completions
zinit light zsh-users/zsh-autosuggestions
# zeno.zsh のカスタムウィジェットでもサジェスションをクリアする
# https://github.com/zsh-users/zsh-autosuggestions/issues/525
ZSH_AUTOSUGGEST_CLEAR_WIDGETS+=(zeno-auto-snippet-and-accept-line)

# "gh pr list"などで表示されるページャーをlessに変更
# https://github.com/ohmyzsh/ohmyzsh/discussions/12737
export GH_PAGER="less -RFX"
export PAGER="less -RFX"
# touchでディレクトリごと作成(mkdir -p)する
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
# mkdirでディレクトリを作成してcdで移動する
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
# vscodeの統合ターミナルからwarpを開けるように
alias warp='open -a Warp'
alias ccusage='bunx ccusage@latest'
alias difit='bunx difit@latest'
alias biome-config='bunx @mfyuu/biome-config'
alias ls='eza --icons --git'
alias la='eza -la --icons --git'
alias tree='eza -T -a -I "node_modules|.git|.cache" --icons'
# インタラクティブシェルのみ（非インタラクティブでは zoxide 未初期化のため）
# claude codeでzエラーになる問題を解消
[[ -o interactive ]] && alias cd='z'
[[ -o interactive ]] && alias cdi='zi'
# alias tree='eza -T -L 3 -a -I "node_modules|.git|.cache" --icons'
# alias diffcopy="(echo '```diff'; git diff --no-color; echo '```') | pbcopy"
eval "$(uv generate-shell-completion zsh)"
eval "$(uvx --generate-shell-completion zsh)"
eval "$(gibo completion zsh)"
# gibo dump をfzfで複数選択 → .gitignore に追記
function gibo() {
    if [[ "$1" == "dump" && -z "$2" ]]; then
        local selected
        selected=$(command gibo list | sed 's/=== .* ===//g' | tr -s ' \t\n' '\n' | grep -v '^$' | \
            fzf -m --preview 'gibo dump {}')
        [[ -z "$selected" ]] && return

        echo "$selected" | xargs gibo dump >> .gitignore
        echo "$ gibo dump ${selected//$'\n'/ } >> .gitignore"
        echo "✓ Done"
    else
        command gibo "$@"
    fi
}
# Prefer uv-managed Python (must be after mise)
export PATH="$HOME/.local/bin:$PATH"
export PATH="$HOME/bin:$PATH"
# curl https://raw.githubusercontent.com/azu/ni.zsh/main/ni.zsh >ni.zsh
# source ni.zsh
# # .zshrc
# # load compdef
# autoload -Uz compinit && compinit
# # load ni.zsh
# source /Users/mfyuu/dev/dotfiles/ni.zsh
export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"

# zoxide
eval "$(zoxide init zsh)"
eval "$(direnv hook zsh)"
eval "$(git wt --init zsh)"

# fast-syntax-highlighting（zsh-syntax-highlighting の代替）
zinit light zdharma-continuum/fast-syntax-highlighting

# Aliases for git-wt
git() {
  if [[ "$1" == "wt" ]]; then
    shift
    if [[ $# -eq 0 ]]; then
      # No arguments: select and move using fzf
      local dir=$(command git-wt | fzf --header-lines=1 | awk '{print $1}')
      if [[ -n "$dir" ]]; then
        cd "$dir"
      fi
    elif [[ "$1" == "-a" ]]; then
      # -a: Add worktree by selecting branch with fzf
      git fetch --all --prune
      local branch=$(git branch -a --format='%(refname:short)' | \
        sed 's|^origin/||' | sort -u | grep -v '^HEAD$' | \
        fzf --preview 'git log --oneline -10 {} --')
      if [[ -n "$branch" ]]; then
        command git-wt "$branch"
      fi
    elif [[ "$1" == "-l" ]]; then
      # -l: Display only
      command git-wt
    else
      command git-wt "$@"
    fi
  else
    command git "$@"
  fi
}

# Completion settings for git-wt (git worktree manager)
# Register 'wt' as a git subcommand with zstyle for zsh's completion system.
# This allows `git wt` + tab to insert a space, followed by zeno's completion.
# (Manual configuration is required as there is no auto-completion like `mise activate zsh`).
zstyle ':completion:*:*:git:*' user-commands wt:'worktree manager'

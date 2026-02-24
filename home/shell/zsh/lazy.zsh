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

# interactive-only aliases
[[ -o interactive ]] && alias cd='z'
[[ -o interactive ]] && alias cdi='zi'

# git-wt (cache, regenerate when .zshrc symlink target changes)
git_wt_cache="${XDG_CACHE_HOME:-$HOME/.cache}/sheldon/git-wt.zsh"
if [[ ! -r "$git_wt_cache" || "$(readlink ~/.zshrc)" != "$(cat "${git_wt_cache}.lock" 2>/dev/null)" ]]; then
  mkdir -p "${git_wt_cache:h}"
  git wt --init zsh > "$git_wt_cache"
  readlink ~/.zshrc > "${git_wt_cache}.lock"
fi
source "$git_wt_cache"
unset git_wt_cache

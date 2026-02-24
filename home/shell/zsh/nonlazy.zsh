# cache_eval: cache expensive eval commands to disk
# eval "$(cmd)" is slow because it spawns a subprocess every time (~6-10ms each).
# This function runs the command once, saves the output to a file, and sources it on subsequent startups.
# Cache is stored in ~/.cache/zsh/<command_name>.zsh
# To invalidate: rm -rf ~/.cache/zsh
cache_eval() {
  local cache_dir="$HOME/.cache/zsh"
  local cache_file="$cache_dir/$(echo "$1" | tr ' /' '_').zsh"
  if [[ ! -s "$cache_file" ]]; then
    mkdir -p "$cache_dir"
    eval "$1" > "$cache_file"
  fi
  source "$cache_file"
}

# GPG_TTY (dynamic value, cannot use sessionVariables)
export GPG_TTY=$TTY

# brew completions (gh, etc.)
# Hardcoded instead of $(brew --prefix) to avoid spawning brew binary (~15ms)
FPATH="/opt/homebrew/share/zsh/site-functions:${FPATH}"

# zsh options (Oh My Zsh compatible completion settings)
zmodload -i zsh/complist
unsetopt menu_complete
setopt auto_menu complete_in_word always_to_end always_last_prompt auto_cd
zstyle ':completion:*:*:*:*:*' menu select

# make word deletion stop at path separators
WORDCHARS=""

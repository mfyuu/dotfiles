# GPG_TTY (dynamic value, cannot use sessionVariables)
export GPG_TTY=$TTY

# brew completions (gh, etc.)
if type brew &>/dev/null; then
  FPATH="$(brew --prefix)/share/zsh/site-functions:${FPATH}"
fi

# zsh options (Oh My Zsh compatible completion settings)
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

# history search with arrow keys
autoload -Uz up-line-or-beginning-search down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "^[[A" up-line-or-beginning-search
bindkey "^[[B" down-line-or-beginning-search

# make word deletion stop at path separators
WORDCHARS=""

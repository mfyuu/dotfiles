{ lib, ... }:
{
  xdg.configFile = {
    "zeno/config.yml".source = ./zeno-config.yml;
    "zsh/nonlazy.zsh".source = ./zsh/nonlazy.zsh;
    "zsh/lazy.zsh".source = ./zsh/lazy.zsh;
  };

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
            zsh-defer source ~/.config/zsh/lazy.zsh
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

        "03-zsh-completions" = {
          github = "zsh-users/zsh-completions";
          apply = [ "fpath" ];
        };

        "04-zsh-autosuggestions" = {
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

      # source nonlazy.zsh synchronously
      (lib.mkOrder 500 ''
        source ~/.config/zsh/nonlazy.zsh
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

window.BENCHMARK_DATA = {
  "lastUpdate": 1773105918015,
  "repoUrl": "https://github.com/mfyuu/dotfiles",
  "entries": {
    "Zsh Startup Time": [
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "f69c702fd4a5f0395a5cc32e1decf7b381acc654",
          "message": "chore(ci): serve benchmark results from root of gh-pages",
          "timestamp": "2026-02-25T16:40:09+09:00",
          "tree_id": "ab05845e7367ee9816c4d0440f9854fe142f58db",
          "url": "https://github.com/mfyuu/dotfiles/commit/f69c702fd4a5f0395a5cc32e1decf7b381acc654"
        },
        "date": 1772005381566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.96,
            "range": "6.48 ms",
            "unit": "ms",
            "extra": "median: 38.96 ms\nmin: 37.21 ms\nmax: 67.3 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "4dd71448e3663a58f6ca2e34aded1ef89e2d8e5e",
          "message": "docs: add benchmark section to README",
          "timestamp": "2026-02-25T16:44:54+09:00",
          "tree_id": "8db9f9604ecb307fa3cddfdd74556c817c277803",
          "url": "https://github.com/mfyuu/dotfiles/commit/4dd71448e3663a58f6ca2e34aded1ef89e2d8e5e"
        },
        "date": 1772005657156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 44.69,
            "range": "16.13 ms",
            "unit": "ms",
            "extra": "median: 44.69 ms\nmin: 35.74 ms\nmax: 119.95 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0ae1f89d186d03bc3f31781eb4a70300d3cc36b",
          "message": "fix(shell): retain prefix during up-arrow history search (#3)\n\n* fix(shell): retain prefix during up-arrow history search (#2)\n\nfast-syntax-highlighting rewrites $LASTWIDGET, causing\nup-line-or-beginning-search to lose the original prefix on\nconsecutive invocations.\n\nReplace it with a custom wrapper around the builtin\n.history-beginning-search-backward that:\n- tracks continuation via $BUFFER comparison instead of $LASTWIDGET\n- moves cursor to end-of-line after each match\n- clears stale POSTDISPLAY left by zsh-autosuggestions\n\n* feat(ci): add PR benchmark workflow with composite actions\n\n- extract common steps into reusable composite actions\n- create setup-bench-env action for Nix install and environment setup\n- create run-benchmark action for hyperfine execution\n- add benchmark-pr.yml to run benchmarks on pull requests\n- refactor benchmark.yml to use composite actions\n- remove redundant zsh warmup (hyperfine --warmup handles it)\n\n* fix(ci): disable git commit signing in PR benchmark workflow\n\n- benchmark-action internally commits to gh-pages even with\n  save-data-file: false, causing failure due to missing 1Password\n  SSH signer in CI",
          "timestamp": "2026-02-26T08:20:02+09:00",
          "tree_id": "efa42bd2a01026ace59abf132eff5db16fddc18b",
          "url": "https://github.com/mfyuu/dotfiles/commit/c0ae1f89d186d03bc3f31781eb4a70300d3cc36b"
        },
        "date": 1772061766013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 45.51,
            "range": "9.24 ms",
            "unit": "ms",
            "extra": "median: 45.51 ms\nmin: 35.96 ms\nmax: 68.04 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e6f0f71c81d29c9173473495a5c6a053382c648",
          "message": "fix(M4Pro): add corporate SSL certificate config (#5)\n\n* fix(M4Pro): add corporate SSL certificate config for deno, node, and git\n\n* fix(ci): use GIT_SSL_CAINFO env var instead of git config sslCAInfo\n\n- programs.git.settings.http.sslCAInfo writes to .config/git/config\n- CI symlinks home-manager output, so sslCAInfo leaks into the runner\n- runner has no cert file at that path, causing git fetch to fail\n- use GIT_SSL_CAINFO env var instead (not written to git config)",
          "timestamp": "2026-02-27T11:47:53+09:00",
          "tree_id": "49689f4e53917b07c1e6c5328b35b049282b8f02",
          "url": "https://github.com/mfyuu/dotfiles/commit/4e6f0f71c81d29c9173473495a5c6a053382c648"
        },
        "date": 1772160865580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 37.2,
            "range": "2.41 ms",
            "unit": "ms",
            "extra": "median: 37.2 ms\nmin: 35.57 ms\nmax: 49.75 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b16e0a3bd748071f2ae62a2a085c4f8b3ac31ce",
          "message": "fix(M4Pro): add AWS_CA_BUNDLE for corporate SSL proxy (#7)\n\n- AWS CLI (Python-based) uses AWS_CA_BUNDLE env var to specify the CA certificate path\n- SSL_CERT_FILE also works, but AWS_CA_BUNDLE is preferred per AWS official documentation",
          "timestamp": "2026-02-27T12:24:25+09:00",
          "tree_id": "e2aa793da9e83b93ee5366f7de558fa5eba9cebf",
          "url": "https://github.com/mfyuu/dotfiles/commit/7b16e0a3bd748071f2ae62a2a085c4f8b3ac31ce"
        },
        "date": 1772162827759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.19,
            "range": "4.19 ms",
            "unit": "ms",
            "extra": "median: 41.19 ms\nmin: 39.76 ms\nmax: 59.57 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b14e393815e97ed1dc237298563a36efcc3a3843",
          "message": "feat: migrate repo path from ~/dev/dotfiles to ~/.dotfiles (#9)",
          "timestamp": "2026-02-27T12:45:50+09:00",
          "tree_id": "ba7a78cffd93ad083ca9259281e9853200bad240",
          "url": "https://github.com/mfyuu/dotfiles/commit/b14e393815e97ed1dc237298563a36efcc3a3843"
        },
        "date": 1772164144711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.68,
            "range": "16.96 ms",
            "unit": "ms",
            "extra": "median: 62.68 ms\nmin: 31.53 ms\nmax: 102.27 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "k.suzuki",
            "username": "mfyuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b14e393815e97ed1dc237298563a36efcc3a3843",
          "message": "feat: migrate repo path from ~/dev/dotfiles to ~/.dotfiles (#9)",
          "timestamp": "2026-02-27T12:45:50+09:00",
          "tree_id": "ba7a78cffd93ad083ca9259281e9853200bad240",
          "url": "https://github.com/mfyuu/dotfiles/commit/b14e393815e97ed1dc237298563a36efcc3a3843"
        },
        "date": 1772164923617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 38.92,
            "range": "3.72 ms",
            "unit": "ms",
            "extra": "median: 38.92 ms\nmin: 37.64 ms\nmax: 53.62 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772767260481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 54.02,
            "range": "10.94 ms",
            "unit": "ms",
            "extra": "median: 54.02 ms\nmin: 42.15 ms\nmax: 82.69 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772767802120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 62.51,
            "range": "27.72 ms",
            "unit": "ms",
            "extra": "median: 62.51 ms\nmin: 22.18 ms\nmax: 158.48 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "a59e5da0dd8724790100c4fc78fe2f9998fa9a79",
          "message": "refactor(claude): update PR verification to focus on manual checks\n\n- change Verification section from CI checklist to acceptance criteria\n- remove auto-verified items (tests, lint, type checks) from template\n- add guidance for repository-specific verification sections\n- update parallel-review and review-merge to use `bunx ulid`",
          "timestamp": "2026-03-06T12:17:42+09:00",
          "tree_id": "0b7ba0303d45ee33a0279d583ff90821220a62bc",
          "url": "https://github.com/mfyuu/dotfiles/commit/a59e5da0dd8724790100c4fc78fe2f9998fa9a79"
        },
        "date": 1772768081183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 46.57,
            "range": "14.21 ms",
            "unit": "ms",
            "extra": "median: 46.57 ms\nmin: 40.66 ms\nmax: 97.32 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6ceb5d0c43f7078b15ed4a8bbc316dbd7b312fb7",
          "message": "chore: update flake dependencies and add dbeaver-community\n\n- update home-manager, nix-darwin, and nixpkgs\n- add dbeaver-community to homebrew casks",
          "timestamp": "2026-03-06T13:03:50+09:00",
          "tree_id": "637cd05cc805f1b196e89d1f7f4dab47a61186d2",
          "url": "https://github.com/mfyuu/dotfiles/commit/6ceb5d0c43f7078b15ed4a8bbc316dbd7b312fb7"
        },
        "date": 1772770034389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 53.93,
            "range": "9.14 ms",
            "unit": "ms",
            "extra": "median: 53.93 ms\nmin: 43.43 ms\nmax: 92.83 ms\nruns: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "committer": {
            "email": "83203852+mfyuu@users.noreply.github.com",
            "name": "mfyuu",
            "username": "mfyuu"
          },
          "distinct": true,
          "id": "6892d02e9471654f50b0d11156605f57d356df32",
          "message": "chore: update flake dependencies and add aqua-voice\n\n- update home-manager, nix-darwin, and nixpkgs dependencies\n- add aqua-voice cask to homebrew packages",
          "timestamp": "2026-03-10T10:22:05+09:00",
          "tree_id": "0ee80b6e2a6b6ed250150e8689b0589c19d260a2",
          "url": "https://github.com/mfyuu/dotfiles/commit/6892d02e9471654f50b0d11156605f57d356df32"
        },
        "date": 1773105917105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 57.31,
            "range": "14.88 ms",
            "unit": "ms",
            "extra": "median: 57.31 ms\nmin: 42.42 ms\nmax: 108.28 ms\nruns: 50"
          }
        ]
      }
    ]
  }
}
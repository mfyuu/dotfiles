window.BENCHMARK_DATA = {
  "lastUpdate": 1772061766945,
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
      }
    ]
  }
}
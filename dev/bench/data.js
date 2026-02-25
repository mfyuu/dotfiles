window.BENCHMARK_DATA = {
  "lastUpdate": 1771999078322,
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
          "id": "32d7014cb0de57ede8f389fd266f77f3ea9c3043",
          "message": "fix(ci): disable git commit signing in benchmark workflow\n\n- home-manager links .gitconfig with 1Password SSH signing enabled\n- CI runner lacks 1Password, causing github-action-benchmark to fail\n  when committing to gh-pages branch",
          "timestamp": "2026-02-25T14:35:46+09:00",
          "tree_id": "a01e05f3325ed78e830b062fd26a5b3a1965ee79",
          "url": "https://github.com/mfyuu/dotfiles/commit/32d7014cb0de57ede8f389fd266f77f3ea9c3043"
        },
        "date": 1771997919321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 52.91,
            "range": "6.18 ms",
            "unit": "ms",
            "extra": "median: 50.95 ms\nmin: 45.61 ms\nmax: 68.7 ms\nruns: 30"
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
          "id": "8ec9baa4ebe95525faccaafa5d1a7d93c0f7c3f8",
          "message": "perf(ci): match local nix-darwin environment for accurate benchmarks\n\n- Clear /etc/zshenv, /etc/zshrc, /etc/zprofile to remove path_helper\n  and redundant compinit that nix-darwin disables locally\n- Warm up cache_eval and zcompile caches before benchmark runs\n- Remove debug step added for investigation",
          "timestamp": "2026-02-25T14:54:53+09:00",
          "tree_id": "f468bb39b200fcf02f3259fd9b8c4cefaf91059b",
          "url": "https://github.com/mfyuu/dotfiles/commit/8ec9baa4ebe95525faccaafa5d1a7d93c0f7c3f8"
        },
        "date": 1771999077061,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 59.93,
            "range": "7.05 ms",
            "unit": "ms",
            "extra": "median: 58.18 ms\nmin: 50.62 ms\nmax: 81.44 ms\nruns: 30"
          }
        ]
      }
    ]
  }
}
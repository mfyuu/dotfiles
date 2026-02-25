window.BENCHMARK_DATA = {
  "lastUpdate": 1772000260337,
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
          "id": "4158e9f0628713615463c66b3c7c44db8a6b223c",
          "message": "fix(ci): keep /etc/zshenv for Nix PATH and create HISTFILE directory\n\n- Keep /etc/zshenv intact (provides nix-daemon.sh for Nix PATH setup)\n- Only clear /etc/zprofile (path_helper) and /etc/zshrc (compinit)\n- Create /Users/mfyuu directory for HISTFILE (hardcoded by home-manager)",
          "timestamp": "2026-02-25T15:01:28+09:00",
          "tree_id": "fdab28ba9683485161d3a208e82c99c3c265a1a6",
          "url": "https://github.com/mfyuu/dotfiles/commit/4158e9f0628713615463c66b3c7c44db8a6b223c"
        },
        "date": 1771999448064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.9,
            "range": "4.28 ms",
            "unit": "ms",
            "extra": "median: 40.61 ms\nmin: 37.59 ms\nmax: 59.22 ms\nruns: 30"
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
          "id": "afb4af1ea57b00c04d97832da12430c18750b448",
          "message": "perf(ci): replace determinate-nix-action with nix-installer-action + cache-nix-action\n\n- switch to nix-installer-action@v21 for Nix installation only\n- add cache-nix-action@v7 to cache Nix store between CI runs\n- use flake.lock hash as cache key with prefix-based fallback\n- enable GC (5GB max) and purge (7 days unused) for storage management\n- add actions: write permission for cache purge API",
          "timestamp": "2026-02-25T15:15:04+09:00",
          "tree_id": "cd19eb1e0e93f0fa5a2d01953c81bdfb8d12924b",
          "url": "https://github.com/mfyuu/dotfiles/commit/afb4af1ea57b00c04d97832da12430c18750b448"
        },
        "date": 1772000259753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 67.02,
            "range": "21.08 ms",
            "unit": "ms",
            "extra": "median: 63.5 ms\nmin: 40.15 ms\nmax: 118.22 ms\nruns: 30"
          }
        ]
      }
    ]
  }
}
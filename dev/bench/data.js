window.BENCHMARK_DATA = {
  "lastUpdate": 1772004319949,
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
          "id": "c734ee6bba52235c9ad9cd0b2709f13b3aeedd04",
          "message": "debug(ci): add environment debug step to diagnose benchmark variance",
          "timestamp": "2026-02-25T15:21:56+09:00",
          "tree_id": "3da52832bedbf7f809589fbb79e1e89f2de61abe",
          "url": "https://github.com/mfyuu/dotfiles/commit/c734ee6bba52235c9ad9cd0b2709f13b3aeedd04"
        },
        "date": 1772000703205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 43.12,
            "range": "3.35 ms",
            "unit": "ms",
            "extra": "median: 43.38 ms\nmin: 37.37 ms\nmax: 49.18 ms\nruns: 30"
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
          "id": "2c79bf9c9121e79dd73cc7cd1535a03f378b1e60",
          "message": "chore(ci): remove debug step from benchmark workflow",
          "timestamp": "2026-02-25T15:28:56+09:00",
          "tree_id": "cd19eb1e0e93f0fa5a2d01953c81bdfb8d12924b",
          "url": "https://github.com/mfyuu/dotfiles/commit/2c79bf9c9121e79dd73cc7cd1535a03f378b1e60"
        },
        "date": 1772001108520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 53.94,
            "range": "11.52 ms",
            "unit": "ms",
            "extra": "median: 52.39 ms\nmin: 36.88 ms\nmax: 81.98 ms\nruns: 30"
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
          "id": "98253d3297ec61b345afe912a64c1ec317ed55ed",
          "message": "feat(ci): add workflow_dispatch without polluting benchmark graph\n\n- add manual trigger via workflow_dispatch\n- disable auto-push on manual runs to keep graph clean",
          "timestamp": "2026-02-25T15:35:51+09:00",
          "tree_id": "63767cba6ebe626cf5e3b05c89df786e346f0679",
          "url": "https://github.com/mfyuu/dotfiles/commit/98253d3297ec61b345afe912a64c1ec317ed55ed"
        },
        "date": 1772001534281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 41.59,
            "range": "4.83 ms",
            "unit": "ms",
            "extra": "median: 42.92 ms\nmin: 34.51 ms\nmax: 51.21 ms\nruns: 30"
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
          "id": "b9ba1d3cdcc06942981698843ba39e3566fd8823",
          "message": "perf(ci): improve benchmark stability\n\n- use median instead of mean to reduce outlier impact\n- increase warmup from 5 to 10 runs",
          "timestamp": "2026-02-25T15:51:46+09:00",
          "tree_id": "94329de7ac6a3be651d70f55dbc3c81905ee8475",
          "url": "https://github.com/mfyuu/dotfiles/commit/b9ba1d3cdcc06942981698843ba39e3566fd8823"
        },
        "date": 1772002487104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 40.06,
            "range": "11 ms",
            "unit": "ms",
            "extra": "median: 40.06 ms\nmin: 36.41 ms\nmax: 82.64 ms\nruns: 30"
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
          "id": "53ae3cde6ce328ec76436844c1f7d118b3759f99",
          "message": "chore(ci): add concurrency control to benchmark workflow",
          "timestamp": "2026-02-25T15:57:50+09:00",
          "tree_id": "b63b1dfd98a9d5005afba4fa78d1cb1c1091d20c",
          "url": "https://github.com/mfyuu/dotfiles/commit/53ae3cde6ce328ec76436844c1f7d118b3759f99"
        },
        "date": 1772002855192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 49.91,
            "range": "2.85 ms",
            "unit": "ms",
            "extra": "median: 49.91 ms\nmin: 46.88 ms\nmax: 58.46 ms\nruns: 30"
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
          "id": "8830d7646f730102a2cb86e63c8f32b390076686",
          "message": "refactor(ci): revert to determinate-nix-action and simplify benchmark\n\n- replace nix-installer-action + cache-nix-action with determinate-nix-action\n  (cache-nix-action's 1.17GB restore negated build time savings)\n- remove actions: write permission (no longer needed without cache purge)\n- remove workflow_dispatch trigger\n- increase benchmark runs from 30 to 50",
          "timestamp": "2026-02-25T16:21:56+09:00",
          "tree_id": "b24cec76b33953c1111d543dff1128331e563de9",
          "url": "https://github.com/mfyuu/dotfiles/commit/8830d7646f730102a2cb86e63c8f32b390076686"
        },
        "date": 1772004319433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "zsh -i -c exit",
            "value": 46.82,
            "range": "5.62 ms",
            "unit": "ms",
            "extra": "median: 46.82 ms\nmin: 39.22 ms\nmax: 63.76 ms\nruns: 50"
          }
        ]
      }
    ]
  }
}
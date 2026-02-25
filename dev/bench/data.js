window.BENCHMARK_DATA = {
  "lastUpdate": 1771997920469,
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
      }
    ]
  }
}
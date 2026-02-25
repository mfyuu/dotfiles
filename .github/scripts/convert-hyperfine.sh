#!/usr/bin/env bash
# Convert hyperfine JSON output to github-action-benchmark customSmallerIsBetter format.
# Usage: convert-hyperfine.sh <input.json> <output.json>
set -euo pipefail

input="${1:?Usage: convert-hyperfine.sh <input.json> <output.json>}"
output="${2:?Usage: convert-hyperfine.sh <input.json> <output.json>}"

jq '[.results[] | {
  name: .command,
  unit: "ms",
  value: ((.median * 1000 * 100 | round) / 100),
  range: ((.stddev * 1000 * 100 | round) / 100 | tostring + " ms"),
  extra: (
    "median: " + ((.median * 1000 * 100 | round) / 100 | tostring) + " ms\n" +
    "min: " + ((.min * 1000 * 100 | round) / 100 | tostring) + " ms\n" +
    "max: " + ((.max * 1000 * 100 | round) / 100 | tostring) + " ms\n" +
    "runs: " + (.times | length | tostring)
  )
}]' "$input" > "$output"

echo "Converted benchmark results:"
cat "$output"

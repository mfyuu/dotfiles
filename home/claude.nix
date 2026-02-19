{ ... }:
{
  home.file = {
    ".claude/settings.json".source = ./claude/settings.json;
    ".claude/CLAUDE.md".source = ./claude/CLAUDE.md;
    ".claude/commands/commit.md".source = ./claude/commands/commit.md;
    ".claude/commands/create-pr.md".source = ./claude/commands/create-pr.md;
    ".claude/commands/gemini-search.md".source = ./claude/commands/gemini-search.md;
    ".claude/commands/kiro.md".source = ./claude/commands/kiro.md;
    ".claude/skills/parallel-review/SKILL.md".source = ./claude/skills/parallel-review/SKILL.md;
    ".claude/skills/review-merge/SKILL.md".source = ./claude/skills/review-merge/SKILL.md;
    ".claude/skills/web-design-guidelines/SKILL.md".source =
      ./claude/skills/web-design-guidelines/SKILL.md;
  };
}

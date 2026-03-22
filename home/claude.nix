{ ... }:
{
  home.file = {
    ".claude/settings.json".source = ./claude/settings.json;
    ".claude/CLAUDE.md".source = ./claude/CLAUDE.md;
    ".claude/skills/commit/SKILL.md".source = ./claude/skills/commit/SKILL.md;
    ".claude/skills/create-pr/SKILL.md".source = ./claude/skills/create-pr/SKILL.md;
    ".claude/commands/gemini-search.md".source = ./claude/commands/gemini-search.md;
    ".claude/commands/kiro.md".source = ./claude/commands/kiro.md;
    ".claude/skills/parallel-review/SKILL.md".source = ./claude/skills/parallel-review/SKILL.md;
    ".claude/skills/review-merge/SKILL.md".source = ./claude/skills/review-merge/SKILL.md;
    ".claude/skills/web-design-guidelines/SKILL.md".source =
      ./claude/skills/web-design-guidelines/SKILL.md;
  };
}

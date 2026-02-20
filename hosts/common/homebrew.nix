{ ... }:
{
  homebrew = {
    enable = true;
    onActivation = {
      cleanup = "zap";
      autoUpdate = true;
      upgrade = true;
    };
    taps = [
      "dimentium/autoraise"
      "k1low/tap"
    ];
    brews = [
      "create-dmg"
      "k1low/tap/git-wt"
    ];
    casks = [
      "1password"
      "adobe-creative-cloud"
      "alt-tab"
      "arc"
      "dimentium/autoraise/autoraiseapp"
      "azookey"
      "claude-code"
      "codex"
      "cursor"
      "docker-desktop"
      "figma"
      "font-udev-gothic"
      "font-udev-gothic-nf"
      "ghostty"
      "google-chrome"
      "jordanbaird-ice"
      "karabiner-elements"
      "logi-options+"
      "microsoft-office"
      "notion"
      "postman"
      "raycast"
      "rectangle"
      "slack"
      "visual-studio-code"
      "warp"
      "zoom"
    ];
  };
}

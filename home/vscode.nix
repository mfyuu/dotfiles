{ ... }:
{
  programs.vscode = {
    enable = true;
    profiles.default = {
      userSettings = builtins.fromJSON (builtins.readFile ./vscode/settings.json);
      keybindings = builtins.fromJSON (builtins.readFile ./vscode/keybindings.json);
    };
  };
}

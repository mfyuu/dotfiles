{ pkgs, ... }:
{
  environment.systemPackages = [ pkgs.mas ];
  homebrew.masApps = {
    "Hand Mirror" = 1502839586;
    "Menu Drop" = 6754022187;
    "RunCat" = 1429033973;
    "Xcode" = 497799835;
  };
}

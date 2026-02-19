{ ... }:
{
  imports = [
    ./appstore.nix
    ./dock.nix
    ./finder.nix
    ./keyboard.nix
    ./mouse.nix
    ./trackpad.nix
  ];

  # Touch ID で sudo 認証を有効にする
  security.pam.services.sudo_local.touchIdAuth = true;

  # 起動時サウンドを無効にする
  system.startup.chime = false;

  system.defaults.menuExtraClock = {
    # 24時間表示にする
    Show24Hour = true;
  };
}

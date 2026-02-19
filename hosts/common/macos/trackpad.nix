{ ... }:
{
  system.defaults = {
    NSGlobalDomain = {
      # トラックパッドの軌跡の速さを最大にする (0-3)
      "com.apple.trackpad.scaling" = 3.0;
      # タップでクリックを有効にする (1: 有効)
      "com.apple.mouse.tapBehavior" = 1;
    };

    trackpad = {
      # タップでクリックを有効にする
      Clicking = true;
    };
  };
}

{ ... }:
{
  system.defaults = {
    NSGlobalDomain = {
      # キーリピート速度を最速にする (デフォルト: 6、最速: 2)
      KeyRepeat = 2;
      # キーリピート認識までの時間を最短にする (デフォルト: 68、最短: 15)
      InitialKeyRepeat = 15;
    };

    hitoolbox = {
      # Fn キーを押して: 何もしない
      AppleFnUsageType = "Do Nothing";
    };
  };
}

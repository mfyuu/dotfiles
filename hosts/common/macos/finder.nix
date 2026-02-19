{ ... }:
{
  system.defaults.finder = {
    # 拡張子を常に表示する
    AppleShowAllExtensions = true;
    # 隠しファイルを表示する
    AppleShowAllFiles = true;
    # デフォルトをリストビューにする
    FXPreferredViewStyle = "Nlsv";
    # 検索時のデフォルト範囲を現在のフォルダにする
    FXDefaultSearchScope = "SCcf";
    # 下部にステータスバーを表示する (項目数・空き容量)
    ShowStatusBar = true;
    # 下部にパスバーを表示する (パンくずリスト)
    ShowPathbar = true;
    # タイトルバーにフルパスを表示する
    _FXShowPosixPathInTitle = true;
  };
}

{ ... }:
{
  programs.gh = {
    enable = true;

    settings = {
      git_protocol = "ssh";
      aliases = {
        co = "pr checkout";
        web = "browse";
      };
    };

    # Extensions are managed manually via `gh ext install`
  };
}

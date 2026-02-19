{
  description = "mfyuu's dotfiles";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-darwin = {
      url = "github:LnL7/nix-darwin";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    home-manager = {
      url = "github:nix-community/home-manager";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    inputs@{
      nixpkgs,
      nix-darwin,
      ...
    }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
      mkDarwinConfig =
        { hostName }:
        nix-darwin.lib.darwinSystem {
          specialArgs = { inherit inputs; };
          modules = [
            {
              networking.hostName = hostName;
              networking.computerName = hostName;
              nixpkgs.hostPlatform = system;
            }
            ./hosts/common
            ./hosts/${hostName}
          ];
        };
    in
    {
      darwinConfigurations."M4Pro" = mkDarwinConfig { hostName = "M4Pro"; };
      formatter.${system} = pkgs.nixfmt-tree;

      apps.${system} = {
        update = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "flake-update" ''
              set -e
              echo "Updating flake.lock..."
              nix flake update --flake "$HOME/dev/dotfiles"
              echo "Done! Run 'nix run .#switch' to apply changes."
            ''
          );
        };

        switch = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "darwin-switch" ''
              set -eo pipefail
              echo "Building and switching to darwin configuration..."
              sudo nix run nix-darwin -- switch --flake "$HOME/dev/dotfiles#M4Pro" |& ${pkgs.nix-output-monitor}/bin/nom
              echo "Done!"
            ''
          );
        };

        build = {
          type = "app";
          program = toString (
            pkgs.writeShellScript "darwin-build" ''
              set -e
              echo "Building darwin configuration..."
              ${pkgs.nix-output-monitor}/bin/nom build "$HOME/dev/dotfiles#darwinConfigurations.M4Pro.system"
              echo "Build successful! Run 'nix run .#switch' to apply."
            ''
          );
        };
      };
    };
}

{ pkgs, ... }:
{
  projectRootFile = "flake.nix";

  programs.mdformat.enable = true;
  programs.prettier.enable = true;
}

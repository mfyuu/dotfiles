{ ... }:
let
  customCert = "/Users/mfyuu/.local/share/ca-certificates/corp.pem";
in
{
  # M4Pro-specific configuration (corporate SSL certificate)
  home-manager.users.mfyuu = {
    home.sessionVariables = {
      DENO_CERT = customCert;
      NODE_EXTRA_CA_CERTS = customCert;
    };
    programs.git.settings.http.sslCAInfo = customCert;
  };
}

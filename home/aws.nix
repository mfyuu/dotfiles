{ ... }:
{
  home.file.".aws/config".text = ''
    [profile tip-extra]
    region = ap-northeast-1
    output = json
    sso_session = sso
    sso_account_id = 341238550926
    sso_role_name = AWSAdministratorAccess
    [profile sandbox]
    sso_session = sso
    sso_account_id = 962800862825
    sso_role_name = AWSAdministratorAccess
    region = ap-northeast-1
    output = json
    [sso-session sso]
    sso_start_url = https://toda.awsapps.com/start
    sso_region = ap-northeast-1
    sso_registration_scopes = sso:account:access
    [profile haisou-kanri]
    sso_session = sso
    sso_account_id = 036890309087
    sso_role_name = AWSAdministratorAccess
    region = ap-northeast-1
    output = json
    [profile koutei]
    sso_session = sso
    sso_account_id = 474668423034
    sso_role_name = AWSAdministratorAccess
    region = ap-northeast-1
    output = json
    [profile toda]
    sso_session = sso
    sso_account_id = 434274117771
    sso_role_name = AWSAdministratorAccess
    region = ap-northeast-1
    output = json
    [profile niyarepo]
    sso_session = sso
    sso_account_id = 649213662808
    sso_role_name = AWSAdministratorAccess
    region = ap-northeast-1
    output = json
    [profile booklift]
    sso_session = sso
    sso_account_id = 537452063997
    sso_role_name = AWSAdministratorAccess
    region = ap-northeast-1
    output = json
    [profile amplify-toda]
    credential_process = aws configure export-credentials --profile toda
    region = ap-northeast-1
  '';
}

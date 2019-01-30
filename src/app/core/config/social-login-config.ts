import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';

export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('Facebook-App-Id')
        },
        {
            id: LinkedInLoginProvider.PROVIDER_ID,
            provider: new LinkedInLoginProvider('81x8w56b9nx8vf', false, 'en_US')
        }
    ]);
    return config;
}

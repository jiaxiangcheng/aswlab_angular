import { Component, OnInit } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';

import { SessionsService } from 'src/app/services/sessions/sessions.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {

    constructor(
      private socialAuthService: AuthService,
      private sessionsService: SessionsService,
      private router: Router
      ) {}

    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        } else if (socialPlatform === 'google') {
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
        }

        this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
            console.log(socialPlatform + ' sign in data : ', userData);
            localStorage.setItem('email', userData.email);
            localStorage.setItem('token', userData.token);
            this.sessionsService.changeUserStatus('loginSuccess');
            this.router.navigate(['/index']);
        });
    }
}

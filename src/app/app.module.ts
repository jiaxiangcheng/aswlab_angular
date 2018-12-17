import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NewestComponent } from './components/newest/newest.component';
import { AskComponent } from './components/ask/ask.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider
} from 'angular-6-social-login';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SubmitComponent } from './components/submit/submit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SubmissionDetailsComponent } from './components/submission-details/submission-details.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

// Configs
export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('652642074981-u3scjh400dkp6116b6pj4fpgth17eod5.apps.googleusercontent.com')
        }
    ]);
    return config;
}

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        TopBarComponent,
        NewestComponent,
        AskComponent,
        SigninComponent,
        TimeAgoPipe,
        SubmitComponent,
        SubmissionDetailsComponent,
        UserInfoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SocialLoginModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

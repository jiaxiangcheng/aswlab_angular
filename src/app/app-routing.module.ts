import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/components/index/index.component';
import { NewestComponent } from '../app/components/newest/newest.component';
import { AskComponent } from './components/ask/ask.component';
import { SigninComponent } from './components/signin/signin.component';
import { SubmitComponent } from './components/submit/submit.component';
import { SubmissionDetailsComponent } from './components/submission-details/submission-details.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'newest', component: NewestComponent },
    { path: 'ask', component: AskComponent},
    { path: 'login', component: SigninComponent },
    { path: 'submit', component: SubmitComponent },
    { path: 'submission/:id', component: SubmissionDetailsComponent},
    { path: 'userinfo', component: UserInfoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

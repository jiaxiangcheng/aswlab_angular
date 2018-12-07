import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../app/components/index/index.component';
import { NewestComponent } from '../app/components/newest/newest.component';
import { AskComponent } from './components/ask/ask.component';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'newest', component: NewestComponent },
    { path: 'ask', component: AskComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

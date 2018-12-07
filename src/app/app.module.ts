import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NewestComponent } from './components/newest/newest.component';
import { AskComponent } from './components/ask/ask.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopBarComponent,
    NewestComponent,
    AskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

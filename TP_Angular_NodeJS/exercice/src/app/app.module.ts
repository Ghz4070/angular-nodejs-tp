import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './site/shared/shared.module';

import { HomeModule } from './site/home/home.module';
import { AboutModule } from './site/about/about.module';
import { FilmsModule } from './site/films/films.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([]),

    SharedModule,

    HomeModule,
    AboutModule,
    FilmsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

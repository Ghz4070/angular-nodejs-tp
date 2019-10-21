import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RecettesComponent } from './recettes/recettes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreaterecetteComponent } from './createrecette/createrecette.component';
import { ParentRecetteComponent } from './parent-recette/parent-recette.component';

const CONFIG: FirebaseAppConfig = {
  apiKey: 'AIzaSyDDdcDQK_0lbWz2aY3inajGAQV5lftcXGg',
  authDomain: 'filerougeangularipssi.firebaseapp.com',
  databaseURL: 'https://filerougeangularipssi.firebaseio.com',
  projectId: 'filerougeangularipssi',
  storageBucket: 'filerougeangularipssi.appspot.com',
  messagingSenderId: '811809849550',
  appId: '1:811809849550:web:caff44bce4bda6bf'
};

@NgModule({
  declarations: [
    AppComponent,
    RecettesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CreaterecetteComponent,
    ParentRecetteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

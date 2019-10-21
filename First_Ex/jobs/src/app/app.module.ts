import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresComponent } from './offres/offres.component';
import { AskComponent } from './ask/ask.component';
import { RacesComponent } from './races/races.component';
import { CarsComponent } from './cars/cars.component';
import { DoNothingDirective } from './directives/do-nothing.directive';
import { FromNowPipe } from './pipes/from-now.pipe';
import { EnfantComponent } from './enfant/enfant.component';
import { ParentComponent } from './parent/parent.component';
import { CommunicationComponent } from './communication/communication.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    AskComponent,
    RacesComponent,
    CarsComponent,
    DoNothingDirective,
    FromNowPipe,
    EnfantComponent,
    ParentComponent,
    CommunicationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

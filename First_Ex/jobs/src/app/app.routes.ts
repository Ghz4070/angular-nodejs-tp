import { Route } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CarsComponent } from './cars/cars.component';
import { RacesComponent } from './races/races.component';
import { CommunicationComponent } from './communication/communication.component';

export const ROUTES: Route[] = [
    { path: '', component: ParentComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'races', component: RacesComponent },
    { path: 'communication', component: CommunicationComponent },
];

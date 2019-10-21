import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { SearchformComponent } from './searchform/searchform.component';
import { SearchmovieService } from './services/searchmovie.service';

import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ListDirective } from './directives/list.directive';

@NgModule({
  declarations: [FilmsComponent, SearchformComponent, ListDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'films', component: FilmsComponent }
    ]),
  ],
  providers: [FormBuilder, SearchmovieService],
})
export class FilmsModule { }

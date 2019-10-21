import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecettesComponent } from './recettes/recettes.component';
import { HomeComponent } from './home/home.component';
import { ParentRecetteComponent } from './parent-recette/parent-recette.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recette', component: RecettesComponent },
  { path: 'addRecette', component: ParentRecetteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../services/recettes.service';

@Component({
  selector: 'app-parent-recette',
  templateUrl: './parent-recette.component.html',
  styleUrls: ['./parent-recette.component.css']
})
export class ParentRecetteComponent implements OnInit {

  constructor(public rs: RecettesService) { }

  ngOnInit() {
  }

  addRecette(recette: any) {
    this.rs.addRecette(recette);
  }
}

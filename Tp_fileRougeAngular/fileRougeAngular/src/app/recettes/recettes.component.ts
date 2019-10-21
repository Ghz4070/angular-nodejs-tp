import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../services/recettes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent implements OnInit {
  public recettes$: Observable<any[]>;

  constructor(public rs: RecettesService) { }

  ngOnInit() {
    this.recettes$ = this.rs.getList('recettes');
  }

}

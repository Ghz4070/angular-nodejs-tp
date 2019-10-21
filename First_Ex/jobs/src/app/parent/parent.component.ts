import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  works: string[];
  devoir: string;
  plainte: string;

  constructor() { }

  ngOnInit() {
    this.works = [
      'mathematique',
      'francais',
      'anglais',
      'informatique',
    ];
  }

  setDevoir(devoirAjouter: string) {
    this.works.push(devoirAjouter);
  }

  showDevoir(indice: number) {
    this.devoir = this.works[indice];
  }

  afficheMessageEnfant(plainteEnfant: string) {
    this.plainte = plainteEnfant;
  }
}

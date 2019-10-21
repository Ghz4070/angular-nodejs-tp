import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

interface Recette {
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  constructor(public db: AngularFireDatabase) { }

  getList(table: string) {
    return this.db.list(table).valueChanges();
  }

  addRecette(recette: Recette) {
    console.log('service', recette)
    this.db.list('recettes').push(recette);
  }
}

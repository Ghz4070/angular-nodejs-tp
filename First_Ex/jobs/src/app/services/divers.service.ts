import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class DiversService {

  cars: Car[];

  constructor() {
    this.cars = [
      {
        marque: 'BMW X1',
        couleur: 'Gris',
        electrique: false,
        puissance: 220,
      },
      {
        marque: 'Audi RS6',
        couleur: 'Blanc',
        electrique: false,
        puissance: 516,
      },
      {
        marque: 'Toyota Rav4',
        couleur: 'Blanc',
        electrique: true,
        puissance: 145,
      },
      {
        marque: 'Audi A4 sline',
        couleur: 'Blanc',
        electrique: false,
        puissance: 144,
      },
    ];
  }

  ngOnInit(): void {
  }

  getCars() {
    return this.cars;
  }
}

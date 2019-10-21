import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { DiversService } from '../services/divers.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  monText: string;
  monAutreTexte: string;

  constructor(private divers: DiversService) { }

  ngOnInit() {
    this.cars = this.divers.getCars();
    this.monText = 'message';
    this.monAutreTexte = 'message2';
  }

}

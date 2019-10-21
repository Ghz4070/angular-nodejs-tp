import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  nbOffer = 10;
  isSelected: boolean;
  isHidden: boolean;
  isColor: string;
  background: string;
  foreground: string;
  isColorChange: string;

  constructor() {
    this.isSelected = true;
    this.isHidden = true;
    this.isColor = 'red';
    this.background = 'yellow';
    this.foreground = 'blue';
  }

  ngOnInit() {
  }

  isButtonClick(color: string) {
    this.foreground = color;
  }

  onButtonClick() {
    alert('bouton cliquer');
  }

  autreButton() {
    // stop l'evenement des double bouton cliquer
    event.stopPropagation();
    alert('autre click');
  }

  verify() {
    alert('space appuyé');
  }

  info(txt: string) {
    alert(txt);
  }

  changeColor(colorChange: string) {
   this.isColorChange = colorChange;
  }
}

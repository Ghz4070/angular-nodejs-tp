import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit, OnChanges, DoCheck {
  @Input() works: string[];
  @Output() devoir = new EventEmitter<number>();
  @Output() plainte = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  ngDoCheck() {
    if (this.works.length > 5) {
      this.plainte.emit('Il y a trop de devoir !');
    }
  }

  choixDevoir(indice: number) {
    this.devoir.emit(indice);
  }
}

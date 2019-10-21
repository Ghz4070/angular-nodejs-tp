import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: string[];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('the title');
    this.meta.addTag({name: 'author', content: 'test'});
  }

  ngOnInit() { // au demarage le code ici est executer
    this.races = [];
  }

  addPony(name: string) {
    this.races.push(name);
  }
}

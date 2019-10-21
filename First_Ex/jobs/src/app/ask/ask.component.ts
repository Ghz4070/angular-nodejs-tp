import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  users: any;

  constructor() {
    this.users = {
      name: 'cedric',
      lastname: 'dupond',
    };

  }

  ngOnInit() {
  }

}
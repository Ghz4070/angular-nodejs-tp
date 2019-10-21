import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createrecette',
  templateUrl: './createrecette.component.html',
  styleUrls: ['./createrecette.component.css']
})
export class CreaterecetteComponent implements OnInit {

  public formRecette: FormGroup;

  @Output() addRecette = new EventEmitter();

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formRecette = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  createRecette() {
    this.addRecette.emit(this.formRecette.value);
  }
}

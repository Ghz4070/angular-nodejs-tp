import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appDoNothing]',
  // tslint:disable-next-line: use-input-property-decorator
  inputs: ['text: logText']
})
export class DoNothingDirective {
  @Input('autreTexte')
  set autreTxt(value: any) {
    console.log(value);
  }

  constructor() {
    console.log('Do nothing');
  }

  set text(value: any) {
    console.log(value);
  }
}

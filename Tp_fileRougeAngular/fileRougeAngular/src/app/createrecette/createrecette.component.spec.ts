import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterecetteComponent } from './createrecette.component';

describe('CreaterecetteComponent', () => {
  let component: CreaterecetteComponent;
  let fixture: ComponentFixture<CreaterecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRecetteComponent } from './parent-recette.component';

describe('ParentRecetteComponent', () => {
  let component: ParentRecetteComponent;
  let fixture: ComponentFixture<ParentRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLienHeComponent } from './form-lien-he.component';

describe('FormLienHeComponent', () => {
  let component: FormLienHeComponent;
  let fixture: ComponentFixture<FormLienHeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLienHeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLienHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E3IndexComponent } from './e3-index.component';

describe('E3IndexComponent', () => {
  let component: E3IndexComponent;
  let fixture: ComponentFixture<E3IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E3IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E3IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranChiTietComponent } from './tran-chi-tiet.component';

describe('TranChiTietComponent', () => {
  let component: TranChiTietComponent;
  let fixture: ComponentFixture<TranChiTietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranChiTietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

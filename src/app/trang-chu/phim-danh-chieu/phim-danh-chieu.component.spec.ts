import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimDanhChieuComponent } from './phim-danh-chieu.component';

describe('PhimDanhChieuComponent', () => {
  let component: PhimDanhChieuComponent;
  let fixture: ComponentFixture<PhimDanhChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimDanhChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimDanhChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

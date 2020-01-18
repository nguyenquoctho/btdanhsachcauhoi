import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataCrossComponentComponent } from './demo-data-cross-component.component';

describe('DemoDataCrossComponentComponent', () => {
  let component: DemoDataCrossComponentComponent;
  let fixture: ComponentFixture<DemoDataCrossComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDataCrossComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataCrossComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

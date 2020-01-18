import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLauoutComponent } from './home-lauout.component';

describe('HomeLauoutComponent', () => {
  let component: HomeLauoutComponent;
  let fixture: ComponentFixture<HomeLauoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLauoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLauoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

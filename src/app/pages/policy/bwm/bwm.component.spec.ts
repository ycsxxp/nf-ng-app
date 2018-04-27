import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwmComponent } from './bwm.component';

describe('BwmComponent', () => {
  let component: BwmComponent;
  let fixture: ComponentFixture<BwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingsweepComponent } from './pingsweep.component';

describe('PingsweepComponent', () => {
  let component: PingsweepComponent;
  let fixture: ComponentFixture<PingsweepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingsweepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingsweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfTrafficComponent } from './if-traffic.component';

describe('IfTrafficComponent', () => {
  let component: IfTrafficComponent;
  let fixture: ComponentFixture<IfTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

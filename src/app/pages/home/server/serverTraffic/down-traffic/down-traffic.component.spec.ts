import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownTrafficComponent } from './down-traffic.component';

describe('DownTrafficComponent', () => {
  let component: DownTrafficComponent;
  let fixture: ComponentFixture<DownTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

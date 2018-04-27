import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTrafficComponent } from './app-traffic.component';

describe('AppTrafficComponent', () => {
  let component: AppTrafficComponent;
  let fixture: ComponentFixture<AppTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

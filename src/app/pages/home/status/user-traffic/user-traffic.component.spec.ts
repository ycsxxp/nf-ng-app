import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrafficComponent } from './user-traffic.component';

describe('UserTrafficComponent', () => {
  let component: UserTrafficComponent;
  let fixture: ComponentFixture<UserTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

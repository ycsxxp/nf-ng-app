import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTrafficComponent } from './server-traffic.component';

describe('ServerTrafficComponent', () => {
  let component: ServerTrafficComponent;
  let fixture: ComponentFixture<ServerTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

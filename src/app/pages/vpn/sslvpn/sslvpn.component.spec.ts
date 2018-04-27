import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslvpnComponent } from './sslvpn.component';

describe('SslvpnComponent', () => {
  let component: SslvpnComponent;
  let fixture: ComponentFixture<SslvpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslvpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslvpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsecTrafficComponent } from './ipsec-traffic.component';

describe('IpsecTrafficComponent', () => {
  let component: IpsecTrafficComponent;
  let fixture: ComponentFixture<IpsecTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpsecTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpsecTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

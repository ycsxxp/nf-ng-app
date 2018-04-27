import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsecComponent } from './ipsec.component';

describe('IpsecComponent', () => {
  let component: IpsecComponent;
  let fixture: ComponentFixture<IpsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

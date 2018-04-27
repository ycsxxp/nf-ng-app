import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsaslinkComponent } from './rsaslink.component';

describe('RsaslinkComponent', () => {
  let component: RsaslinkComponent;
  let fixture: ComponentFixture<RsaslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsaslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsaslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaslinkComponent } from './saslink.component';

describe('SaslinkComponent', () => {
  let component: SaslinkComponent;
  let fixture: ComponentFixture<SaslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvComponent } from './av.component';

describe('AvComponent', () => {
  let component: AvComponent;
  let fixture: ComponentFixture<AvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

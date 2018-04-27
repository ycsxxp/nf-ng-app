import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwlinkComponent } from './cwlink.component';

describe('CwlinkComponent', () => {
  let component: CwlinkComponent;
  let fixture: ComponentFixture<CwlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

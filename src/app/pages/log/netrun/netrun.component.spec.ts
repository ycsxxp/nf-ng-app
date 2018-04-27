import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetrunComponent } from './netrun.component';

describe('NetrunComponent', () => {
  let component: NetrunComponent;
  let fixture: ComponentFixture<NetrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

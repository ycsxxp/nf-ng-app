import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceInfoComponent } from './interface-info.component';

describe('InterfaceInfoComponent', () => {
  let component: InterfaceInfoComponent;
  let fixture: ComponentFixture<InterfaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

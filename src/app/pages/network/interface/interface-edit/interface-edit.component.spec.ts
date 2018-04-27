import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEditComponent } from './interface-edit.component';

describe('InterfaceEditComponent', () => {
  let component: InterfaceEditComponent;
  let fixture: ComponentFixture<InterfaceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

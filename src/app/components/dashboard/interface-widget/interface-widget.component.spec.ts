import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceWidgetComponent } from './interface-widget.component';

describe('InterfaceWidgetComponent', () => {
  let component: InterfaceWidgetComponent;
  let fixture: ComponentFixture<InterfaceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

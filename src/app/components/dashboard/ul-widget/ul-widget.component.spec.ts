import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlWidgetComponent } from './ul-widget.component';

describe('UlWidgetComponent', () => {
  let component: UlWidgetComponent;
  let fixture: ComponentFixture<UlWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionWidgetComponent } from './version-widget.component';

describe('VersionWidgetComponent', () => {
  let component: VersionWidgetComponent;
  let fixture: ComponentFixture<VersionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

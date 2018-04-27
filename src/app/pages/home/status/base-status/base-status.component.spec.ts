import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStatusComponent } from './base-status.component';

describe('BaseStatusComponent', () => {
  let component: BaseStatusComponent;
  let fixture: ComponentFixture<BaseStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

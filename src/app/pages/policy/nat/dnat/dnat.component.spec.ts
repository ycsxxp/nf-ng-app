import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnatComponent } from './dnat.component';

describe('DnatComponent', () => {
  let component: DnatComponent;
  let fixture: ComponentFixture<DnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

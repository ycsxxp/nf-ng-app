import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnatComponent } from './snat.component';

describe('SnatComponent', () => {
  let component: SnatComponent;
  let fixture: ComponentFixture<SnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwComponent } from './fw.component';

describe('FwComponent', () => {
  let component: FwComponent;
  let fixture: ComponentFixture<FwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

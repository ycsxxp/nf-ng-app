import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdslinkComponent } from './idslink.component';

describe('IdslinkComponent', () => {
  let component: IdslinkComponent;
  let fixture: ComponentFixture<IdslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

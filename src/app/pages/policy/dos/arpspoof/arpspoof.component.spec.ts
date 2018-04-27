import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArpspoofComponent } from './arpspoof.component';

describe('ArpspoofComponent', () => {
  let component: ArpspoofComponent;
  let fixture: ComponentFixture<ArpspoofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArpspoofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArpspoofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

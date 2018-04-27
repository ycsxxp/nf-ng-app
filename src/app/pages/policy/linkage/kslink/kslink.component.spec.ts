import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KslinkComponent } from './kslink.component';

describe('KslinkComponent', () => {
  let component: KslinkComponent;
  let fixture: ComponentFixture<KslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmacbindComponent } from './ipmacbind.component';

describe('IpmacbindComponent', () => {
  let component: IpmacbindComponent;
  let fixture: ComponentFixture<IpmacbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpmacbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpmacbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

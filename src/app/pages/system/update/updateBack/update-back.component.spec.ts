import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBackComponent } from './update-back.component';

describe('UpdateBackComponent', () => {
  let component: UpdateBackComponent;
  let fixture: ComponentFixture<UpdateBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

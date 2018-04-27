import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlfilterComponent } from './urlfilter.component';

describe('UrlfilterComponent', () => {
  let component: UrlfilterComponent;
  let fixture: ComponentFixture<UrlfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

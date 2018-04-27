import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrafficComponent } from './top-traffic.component';

describe('TopTrafficComponent', () => {
  let component: TopTrafficComponent;
  let fixture: ComponentFixture<TopTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

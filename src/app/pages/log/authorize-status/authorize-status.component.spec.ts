import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeStatusComponent } from './authorize-status.component';

describe('AuthorizeStatusComponent', () => {
  let component: AuthorizeStatusComponent;
  let fixture: ComponentFixture<AuthorizeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerctrlComponent } from './layerctrl.component';

describe('LayerctrlComponent', () => {
  let component: LayerctrlComponent;
  let fixture: ComponentFixture<LayerctrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerctrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerctrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

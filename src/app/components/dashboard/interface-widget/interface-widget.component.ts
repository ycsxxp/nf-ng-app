import { Component, ElementRef, Renderer, EventEmitter, HostListener, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-widget',
  templateUrl: './interface-widget.component.html',
  styleUrls: ['./interface-widget.component.scss']
})
export class InterfaceWidgetComponent implements OnInit {

  public click = false
  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Output() onChangeArea = new EventEmitter<any>()
  public area = 1
  private changeArea() {
    this.click = !this.click
    // this.area = 2
  }

  private changeToArea(area) {
    this.area = area
    this.onChangeArea.emit({ area: this.area, widget: 'app-interface-widget' })
  }
  @HostListener('document:mousedown', ['$event']) onMouseMove(event: any) {
    if (event.target.className !== 'widget-area-change' && event.target.className !== 'area-cell') {
      this.click = false
    }
  }

  data = [
    {
      key: '1',
      name: 'M',
      ip: '10.245.41.201/16',
      zone: 'DMZ',
      speed: '100Mb/s',
      mode: 'Full'
    }, {
      key: '2',
      name: 'M',
      ip: '10.245.41.201/16',
      zone: 'DMZ',
      speed: '100Mb/s',
      mode: 'Full'
    }, {
      key: '3',
      name: 'M',
      ip: '10.245.41.201/16',
      zone: 'DMZ',
      speed: '100Mb/s',
      mode: 'Full'
    }
  ];
  ngOnInit() {
  }

}

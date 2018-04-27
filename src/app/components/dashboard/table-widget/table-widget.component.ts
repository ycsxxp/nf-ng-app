import { Component, ElementRef, Renderer, EventEmitter, HostListener, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.css']
})
export class TableWidgetComponent implements OnInit {

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
    this.onChangeArea.emit({ area: this.area, widget: 'app-table-widget' })
  }
  @HostListener('document:mousedown', ['$event']) onMouseMove(event: any) {
    if (event.target.className !== 'widget-area-change' && event.target.className !== 'area-cell') {
      this.click = false
    }
  }

  ngOnInit() {
  }

}

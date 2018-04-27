import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }
  
  public range: Object
  public ranges = [
    { value: 'daily', label: '日报表' },
    { value: 'weekly', label: '周报表' }
  ]
  public time = new Date()

  constructor() { }

  ngOnInit() {
    this.range = this.ranges[0]
  }

}

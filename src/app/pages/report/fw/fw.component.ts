import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fw',
  templateUrl: './fw.component.html',
  styleUrls: ['./fw.component.css']
})
export class FwComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }
  
  public range: Object
  public ranges = [
    { value: 'daily', label: '日报表' },
    { value: 'weekly', label: '周报表' },
    { value: 'monthly', label: '月报表' },
    { value: 'yearly', label: '年报表' }
  ]
  public time = new Date()

  constructor() { }

  ngOnInit() {
    this.range = this.ranges[0]
  }

}

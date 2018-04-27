import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-av',
  templateUrl: './av.component.html',
  styleUrls: ['./av.component.css']
})
export class AvComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public selectedAction
  public actions = [
    { value: '0', label: '全部' },
    { value: '1', label: '允许' },
    { value: '2', label: '阻断' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.selectedAction = this.actions[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        event: '测试事件',
        src_ip: '100.1.1.1',
        src_port: '80',
        user: 'yang',
        dst_ip: '41.10.10.156'
      });
    }
  }

}

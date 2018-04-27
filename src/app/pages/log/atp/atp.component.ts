import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atp',
  templateUrl: './atp.component.html',
  styleUrls: ['./atp.component.css']
})
export class AtpComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public danger: Object
  public dangers = [
    { value: '0', label: '全部' },
    { value: '5', label: '5' },
    { value: '4', label: '4' },
    { value: '3', label: '3' },
    { value: '2', label: '2' },
    { value: '1', label: '1' }
  ]
  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.danger = this.dangers[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        src_ip: '100.1.1.1',
        src_port: '80',
        dst_ip: '41.10.10.156',
        dst_port: '8080',
        danger: '5',
        filename: 'filename',
        event: 'event',
        action: 'action'
      });
    }
  }

}

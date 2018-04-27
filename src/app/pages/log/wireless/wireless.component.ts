import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wireless',
  templateUrl: './wireless.component.html',
  styleUrls: ['./wireless.component.css']
})
export class WirelessComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public status: Object
  public statuss = [
    { value: '0', label: '全部' },
    { value: '2', label: '允许' },
    { value: '1', label: '阻断' }
  ]

  public type: Object
  public types = [
    { value: '0', label: '全部' },
    { value: '1', label: '无线设备' },
    { value: '6', label: '疑似共享设备' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.status = this.statuss[0]
    this.type = this.types[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        type: '测试类型',
        src_ip: '100.1.1.1',
        dst_ip: '41.10.10.156',
        card: 'G1/1',
        src_mac: 'MAC地址',
        temp_name: '模板'
      });
    }
  }

}

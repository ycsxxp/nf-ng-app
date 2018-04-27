import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reputation',
  templateUrl: './reputation.component.html',
  styleUrls: ['./reputation.component.css']
})
export class ReputationComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public action: Object
  public actions = [
    { value: '0', label: '全部' },
    { value: '1', label: '允许' },
    { value: '2', label: '阻断' }
  ]

  public event_type: Object
  public event_types = [
    { value: '1', label: '网页浏览' },
    { value: '2', label: '网络言论' },
    { value: '3', label: '表单提交' },
    { value: '4', label: '电子邮件' },
    { value: '5', label: '即时通讯' },
    { value: '6', label: '文件传输' },
    { value: '7', label: '服务器操作' }
  ]

  public value
  public values = [
    { value: 'all', label: '全部' },
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.action = this.actions[0]
    this.event_type = this.event_types[0]
    this.value = this.values[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        src_ip: '100.1.1.1',
        src_port: '80',
        user: 'yang',
        dst_ip: '41.10.10.156',
        dst_port: '8080',
        event_type: 'event_type'
      });
    }
  }

}

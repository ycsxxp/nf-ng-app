import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scm',
  templateUrl: './scm.component.html',
  styleUrls: ['./scm.component.css']
})
export class ScmComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public type:Object
  public types = [
    { value: '1', label: '网页浏览' },
    { value: '2', label: '网络言论' },
    { value: '3', label: '表单提交' },
    { value: '4', label: '电子邮件' },
    { value: '5', label: '即时通讯' },
    { value: '6', label: '文件传输' },
    { value: '7', label: '服务器操作' }
  ]

  public level: Object
  public levels = [
    { value: '0', label: '全部' },
    { value: '1', label: '低' },
    { value: '2', label: '中' },
    { value: '4', label: '高' },
    { value: '8', label: '紧急' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.type = this.types[0]
    this.level = this.levels[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        card: 'G1/1',
        user: 'yang',
        type: '测试类型',
        level: 'level',
        keyword: 'keyword',
        protocol: 'protocol'
      });
    }
  }

}

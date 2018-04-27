import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-scm',
  templateUrl: './scm.component.html',
  styleUrls: ['./scm.component.css']
})
export class ScmComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }
  
  public type: Object
  public types = [
    { value: 'overview', label: '事件概况' },
    { value: 'websurf', label: '网页浏览' },
    { value: 'webpost', label: '网络言论' },
    { value: 'webform', label: '表单提交' },
    { value: 'email', label: '电子邮件' },
    { value: 'im', label: '即时通讯' },
    { value: 'file', label: '文件传输' },
    { value: 'server', label: '服务器操作' },
    { value: 'all', label: '全部' }
  ]

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
    this.type = this.types[0]
    this.range = this.ranges[0]
  }

}

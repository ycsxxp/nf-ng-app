import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize-status',
  templateUrl: './authorize-status.component.html',
  styleUrls: ['./authorize-status.component.css']
})
export class AuthorizeStatusComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public condition_login: Object
  public condition_logins = [
    { value: '3', label: '全部' },
    { value: '1', label: '已登录' },
    { value: '0', label: '未登录' },
    { value: '2', label: '强制下线' },
    { value: '4', label: 'Agent在线' }
  ]

  public domain: Object
  public domains = [
    { value: 'all', label: '全部' },
    { value: '0', label: 'Default' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.condition_login = this.condition_logins[0]
    this.domain = this.domains[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        user: 'yang',
        domain: 'Default',
        ip: '10.66.1.1',
        lasttime: '2017-10-18 18:27:55',
        status: '已登录',
        up_traffic: '500',
        down_traffic: '500',
        all_traffic: '1000',
        logout: '下线'
      });
    }
  }

}

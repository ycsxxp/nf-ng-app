import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public module: Object
  public modules = [
    { value:'all', label: '全部' },
    { value:'fw', label: '防火墙' },
    { value:'sslvpn', label: 'SSLVPN' }
  ]

  public domain: Object
  public domains = [
    { value:'all', label: '全部' },
    { value:'0', label: 'Default' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.module = this.modules[0]
    this.domain = this.domains[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        user: 'yang',
        domain: 'default',
        module: '防火墙',
        ip: '10.66.1.1',
        msg: '测试msg'
      });
    }
  }

}

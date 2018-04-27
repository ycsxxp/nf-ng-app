import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssl',
  templateUrl: './ssl.component.html',
  styleUrls: ['./ssl.component.css']
})
export class SslComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public module: Object
  public modules = [
    { value: 'ALL', label: '全部' },
    { value: 'NSVPN', label: 'NSVPN' },
    { value: 'MONITOR', label: 'MONITOR' },
    { value: 'VPN_CLIENT', label: 'VPN_CLIENT' },
    { value: 'WEB_PROXY', label: 'WEB_PROXY' },
    { value: 'WEB_PROXY_NTLM', label: 'WEB_PROXY_NTLM' },
    { value: 'WEB_PROXY_CHECKUSER', label: 'WEB_PROXY_CHECKUSER' },
    { value: 'SSLVPN_CONNECT', label: 'SSLVPN_CONNECT' }
  ]
  
  public level: Object
  public levels = [
    { value: 'ALL', label: '全部' },
    { value: 'ERROR', label: 'ERROR' },
    { value: 'WARN', label: 'WARN' },
    { value: 'INFO', label: 'INFO' },
    { value: 'DEBUG', label: 'DEBUG' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.module = this.modules[0]
    this.level = this.levels[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time: '2017-10-18 18:27:55',
        module: 'MONITOR',
        level: 'ERROR',
        userName: 'yangchao',
        clientIP: '10.66.1.1',
        description: '这是描述'
      });
    }
  }

}

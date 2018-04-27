import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netrun',
  templateUrl: './netrun.component.html',
  styleUrls: ['./netrun.component.css']
})
export class NetrunComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public type: Object
  public types = [
    { value: '1', label: '警告日志' },
    { value: '2', label: '运行日志' },
    { value: '3', label: '调试日志' }
  ]

  public level: Object
  public levels = [
    { value: '1', label: '正常' },
    { value: '2', label: '警告' },
    { value: '3', label: '严重' }
  ]

  public module: Object
  public modules = [
    { value: 'all', label: '全部' },
    { value: 'network', label: '网络故障' },
    { value: 'interface', label: '接口状态' },
    { value: 'HA', label: '高可用性日志' },
    { value: 'system', label: '系统日志' },
    { value: 'PPPoE', label: 'PPPoE日志' },
    { value: 'fw_ids', label: 'IDS联动日志' },
    { value: 'ROUTE', label: '路由日志' },
    { value: 'fwhit', label: '策略匹配次数' },
    { value: 'ks', label: '终端安全联动' },
    { value: 'rsas', label: 'RSAS联动日志' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.module = this.modules[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        level: '警告',
        module: '网络故障',
        time: '2017-10-18 18:27:55',
        type: '运行日志',
        content: '测试'
      });
    }
  }

}

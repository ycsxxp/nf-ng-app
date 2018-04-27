import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-asset-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  public tableHeader = [
    { title: '风险等级' },
    { title: 'IP' },
    { title: '操作系统' },
    { title: '浏览器' },
    { title: '应用' },
    { title: '流量(上行|下行)' },
    { title: '杀毒软件' },
    { title: '服务' },
    { title: '来源' },
    { title: '操作' }
  ]
  // 查找
  public _search: string
  public _dataSet = []
  // 当前页数
  public _current = 1
  // 全选
  public _allChecked = false;
  public _indeterminate = false;

  public _refreshStatus() {
    const allChecked = this._dataSet.every(value => value.checked === true)
    const allUnChecked = this._dataSet.every(value => !value.checked)
    this._allChecked = allChecked
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }
  public _checkAll(value) {
    if (value) {
      this._dataSet.forEach(data => data.checked = true);
    } else {
      this._dataSet.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }
  
  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        id: '1',
        level: '0',
        ip: '10.66.250.1',
        os: 'Windows 10',
        br: 'Chrome',
        app: '',
        traffic: '0.0 bps / 0.0 bps',
        av: 'KingSoft PC Doctor',
        service: 'systat[t]',
        source: '手动',
        action: '编辑'
      });
    }
  }

}

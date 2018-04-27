import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-bwm',
  templateUrl: './bwm.component.html',
  styleUrls: ['./bwm.component.css']
})
export class BwmComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '源安全区' },
    { title: '源地址对象' },
    { title: '用户' },
    { title: '应用' },
    { title: '选项' },
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
        key: i,
        id: '1',
        szone: 'global',
        sobj: '40.0.0.0',
        user: 'any',
        app: 'any',
        rule: '流量分析',
        action: '操作'
      });
    }
  }

}

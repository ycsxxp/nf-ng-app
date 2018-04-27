import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '应用' },
    { title: '超时时间' },
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
        app: 'SSH',
        timeout: '604800',
        action: '编辑'
      });
    }
  }

}

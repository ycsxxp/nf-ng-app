import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-bwm',
  templateUrl: './bwm.component.html',
  styleUrls: ['./bwm.component.css']
})
export class BwmComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: '优先级' },
    { title: '保证上行带宽(Kbps)' },
    { title: '保证下行带宽(Kbps)' },
    { title: '最大上行带宽(Kbps)' },
    { title: '最大下行带宽(Kbps)' },
    { title: '最大会话数' },
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
        name   : 'yangchao',
        priority: '2',
        min_up: '1000',
        min_down: '80',
        max_up: '6666',
        max_down: '8080',
        max_session: '5',
        action: 'action'
      });
    }
  }

}

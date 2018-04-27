import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-linkage-cwlink',
  templateUrl: './cwlink.component.html',
  styleUrls: ['./cwlink.component.css']
})
export class CwlinkComponent implements OnInit {

  public tableHeader = [
    { title: '源IP' },
    { title: '源端口' },
    { title: '目的IP' },
    { title: '目的端口' },
    { title: '协议' },
    { title: '时间' },
    { title: '动作' }
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

  }

}

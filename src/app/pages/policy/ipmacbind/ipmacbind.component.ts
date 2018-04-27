import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-ipmacbind',
  templateUrl: './ipmacbind.component.html',
  styleUrls: ['./ipmacbind.component.css']
})
export class IpmacbindComponent implements OnInit {

  public isdolog = false
  public snmpEnable = false
  public tableHeader = [
    { title: '编号' },
    { title: 'IP' },
    { title: 'MAC' },
    { title: '类型' },
    { title: '备注' },
    { title: '状态' },
    { title: '操作' }
  ]
  public tableHeaderWhiteList = [
    { title: '编号' },
    { title: 'IP' },
    { title: 'MAC' },
    { title: '备注' },
    { title: '操作' }
  ]
  // 查找
  public _search: string
  public _dataSet = []
  public _dataWhiteList = []
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

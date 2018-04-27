import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-nat-snat',
  templateUrl: './snat.component.html',
  styleUrls: ['./snat.component.css']
})
export class SnatComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: '源地址对象' },
    { title: '目的地址对象' },
    { title: '目的接口' },
    { title: '服务' },
    { title: 'NAT对象' },
    { title: '绑定HA线路' },
    { title: '操作' },
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

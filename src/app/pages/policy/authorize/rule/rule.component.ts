import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-authorize-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '源地址对象' },
    { title: '目的地址对象' },
    { title: '认证域（IP/MAC检查类型）' },
    { title: '选项' },
    { title: '使用' },
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

  }

}

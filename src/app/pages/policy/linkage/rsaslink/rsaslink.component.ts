import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-linkage-rsaslink',
  templateUrl: './rsaslink.component.html',
  styleUrls: ['./rsaslink.component.css']
})
export class RsaslinkComponent implements OnInit {

  public enabled = false
  public tableHeader = [
    { title: '资产IP' },
    { title: '已防护漏洞数' },
    { title: '高危漏洞拦截数' },
    { title: '总拦截数' },
    { title: '详细信息' }
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

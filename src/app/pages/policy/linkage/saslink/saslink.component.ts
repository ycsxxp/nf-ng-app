import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-linkage-saslink',
  templateUrl: './saslink.component.html',
  styleUrls: ['./saslink.component.css']
})
export class SaslinkComponent implements OnInit {

  public tableHeader = [
    { title: '优先级' },
    { title: '域名称' },
    { title: '服务器名称' },
    { title: '服务器类型' },
    { title: '服务器IP' },
    { title: '服务器端口' },
    { title: '其他信息' },
    { title: '启用' },
    { title: '操作' },
    { title: '选项' }
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

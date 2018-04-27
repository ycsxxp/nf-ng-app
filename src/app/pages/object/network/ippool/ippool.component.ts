import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-network-ippool',
  templateUrl: './ippool.component.html',
  styleUrls: ['./ippool.component.css']
})
export class IppoolComponent implements OnInit {

  public tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: 'IP' },
    { title: '备注' },
    { title: '取反' },
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
        id: '100001',
        name: '172.0.0.0',
        ip: '172.16.0.0 - 172.31.255.254',
        comment: '备注',
        invert: '否',
        action: '操作'
      });
    }
  }

}

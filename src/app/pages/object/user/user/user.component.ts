import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-user-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public panel = {
    active: true,
    name: '域&组'
  }

  public domain: Object
  public domains = [
    { value: '0', label: 'Default'},
    { value: '1', label: '测试域'}
  ]

  public group: Object
  public groups = [
    { value: '0', label: '所有用户'},
    { value: '1', label: '测试组'}
  ]

  public tableHeader = [
    { title: '用户名' },
    { title: '所属组' },
    { title: '真实姓名' },
    { title: '邮箱' },
    { title: '备注' },
    { title: '证书' },
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
    this.domain = this.domains[0]
    this.group = this.groups[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        account: 'aa',
        group: '测试组',
        name: '真实姓名',
        email: 'ceshi@ceshi.com',
        comment: '备注',
        cert: '1234ABCD02',
        action: '操作'
      });
    }
  }

}

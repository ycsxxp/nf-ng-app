import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-user-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  public panel = {
    active: true,
    name: '域&组'
  }

  public domain: Object
  public domains = [
    { value: '0', label: 'Default'},
    { value: '1', label: '测试域'}
  ]

  public tableHeader = [
    { title: '名称' },
    { title: '包含用户' },
    { title: '其他信息' },
    { title: '备注' },
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

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        name: '测试组',
        userIds: 'aa, bb, nsfocus1',
        extrainfo: '由系统创建，当前域下的所有用户属于该组，不能删除',
        comment: '备注',
        action: '操作'
      });
    }
  }

}

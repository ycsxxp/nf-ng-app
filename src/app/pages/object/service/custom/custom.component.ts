import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-service-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: '协议' },
    { title: '选项' },
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

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        id   : '315001',
        name: '自定义服务',
        protocol: 'tcp',
        option: '源端口:0-65535 ; 目的端口:0-65535',
        comment: 'Default',
        action: '编辑'
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: '类别' },
    { title: '子类' },
    { title: '实现技术' },
    { title: '风险等级' },
    { title: '标签' },
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
        id: '1',
        name: '过滤器名称',
        cat: '商业系统',
        subcat: 'ERP-CRM',
        technology: '基于浏览器',
        risk: '1',
        tag: '标签',
        action: '编辑'
      });
    }
  }

}

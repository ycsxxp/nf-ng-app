import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-user-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public pass_min = '6'
  public pass_level: Object
  public pass_levels = [
    { value: '0', label: '不限制' },
    { value: '1', label: '中' },
    { value: '2', label: '强' }
  ]
  public modifyDefaultPwd = '1'
  public captchaEnable ='0'
  public isEnable = '0'
  public times = '3'
  public way = 'captcha'
  public way_time = '1'
  public way_time_ip = '1'
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
    this.pass_level = this.pass_levels[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        name: '测试域',
        domainType: '本地 - 密码认证',
        authServer: 'Localhost',
        comment: '备注',
        isEnable: '启用',
        action: '操作'
      });
    }
  }

}

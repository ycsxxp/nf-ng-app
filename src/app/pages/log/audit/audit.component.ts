import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        user: 'weboper',
        ip: '10.66.26.2',
        msg: '登录成功',
        time: '2017-10-20 13:30:30'
      });
    }
  }

}

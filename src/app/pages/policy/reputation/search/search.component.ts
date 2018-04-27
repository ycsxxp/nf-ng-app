import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-reputation-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public cat = 'url'
  public type = 'local'
  public tableHeader = [
    { title: '字段' },
    { title: '说明' }
  ]

  public _dataSet = [
    { value: '查询无结果', label: '查询状态' },
    { value: '未知', label: '信誉等级' },
    { value: '192.168.1.1', label: '服务器地址' },
    { value: '80', label: '通信端口' },
    { value: 'tcp', label: '通信协议' }
  ]
  // 全选
  
  constructor() { }

  ngOnInit() {

  }

}

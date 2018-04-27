import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-service-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  public tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: '协议' },
    { title: '选项' },
    { title: '备注' }
  ]
  // 查找
  public _search: string
  public _dataSet = []
  // 当前页数
  public _current = 1
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        id   : '310009',
        name: 'ftp[t]',
        protocol: 'tcp',
        option: '源端口:any ; 目的端口:21',
        comment: 'FTP. control'
      });
    }
  }

}

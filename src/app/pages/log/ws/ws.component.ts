import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws',
  templateUrl: './ws.component.html',
  styleUrls: ['./ws.component.css']
})
export class WsComponent implements OnInit {
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
        time   : '2017-10-18 18:27:55',
        src_ip: '100.1.1.1',
        src_port: '80',
        user: 'yang',
        dst_ip: '41.10.10.156',
        dst_port: '8080',
        cat: '测试分类'
      });
    }
  }

}

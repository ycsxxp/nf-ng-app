import { Component, OnInit } from '@angular/core';
import { RestoreService } from './restore.service';
@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {
  _dataMapIp = [];//显示的数据,异步获取
  _dataSet = [];//显示的数据,异步获取
  data = [];
  constructor(private restoreService: RestoreService) { }

  ngOnInit() {
    this.query();
  }
  
  query(){
    this.restoreService.queryMapip().then((data: any) => {
      this._dataMapIp = data;
    });
    this.restoreService.queryMapip().then((data: any) => {
      this._dataSet = data;
    });
  }
}

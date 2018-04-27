import { Component, OnInit } from '@angular/core';
import { ServerTrafficService } from './server-traffic.service';
@Component({
  selector: 'app-server-traffic',
  templateUrl: './server-traffic.component.html',
  styleUrls: ['./server-traffic.component.css']
})
export class ServerTrafficComponent implements OnInit {
  _dataMapIp = [];//显示的数据,异步获取
  _dataSet = [];//显示的数据,异步获取
  constructor(private healthStatusService: ServerTrafficService) { }

  ngOnInit() {
    this.query();
  }
  
  query(){
    this.healthStatusService.queryMapip().then((data: any) => {
      this._dataMapIp = data;
    });
    this.healthStatusService.queryMapip().then((data: any) => {
      this._dataSet = data;
    });
  }
}

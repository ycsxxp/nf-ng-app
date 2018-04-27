import { Component, OnInit } from '@angular/core';
import { HealthStatusService } from './health-status.service';
@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {
  _dataMapIp = [];//显示的数据,异步获取
  _dataSet = [];//显示的数据,异步获取
  constructor(private healthStatusService: HealthStatusService) { }

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

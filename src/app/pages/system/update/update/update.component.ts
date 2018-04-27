import { Component, OnInit } from '@angular/core';
import { UpdateService } from './update.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  _dataMapIp = [];//显示的数据,异步获取
  _dataSet = [];//显示的数据,异步获取
  data = [];
  constructor(private updateService: UpdateService) { }

  ngOnInit() {
    this.query();
  }
  
  query(){
    this.updateService.queryMapip().then((data: any) => {
      this._dataMapIp = data;
    });
    this.updateService.queryMapip().then((data: any) => {
      this._dataSet = data;
    });
  }
}

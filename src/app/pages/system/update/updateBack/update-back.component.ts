import { Component, OnInit } from '@angular/core';
import { UpdateBackService } from './update-back.service';
@Component({
  selector: 'app-update-back',
  templateUrl: './update-back.component.html',
  styleUrls: ['./update-back.component.css']
})
export class UpdateBackComponent implements OnInit {
  _dataMapIp = [];//显示的数据,异步获取
  _dataSet = [];//显示的数据,异步获取
  data = [];
  constructor(private updateBackService: UpdateBackService) { }

  ngOnInit() {
    this.query();
  }
  
  query(){
    this.updateBackService.queryMapip().then((data: any) => {
      this._dataMapIp = data;
    });
    this.updateBackService.queryMapip().then((data: any) => {
      this._dataSet = data;
    });
  }
}

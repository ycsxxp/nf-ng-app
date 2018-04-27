import { Component, OnInit } from '@angular/core';
import { AutoUpdateService } from './auto-update.service';
@Component({
  selector: 'app-auto-update',
  templateUrl: './auto-update.component.html',
  styleUrls: ['./auto-update.component.css']
})
export class AutoUpdateComponent implements OnInit {
  _dataMapIp = [];//显示的数据,异步获取
  _dataSet = [];//显示的数据,异步获取
  data = [];
  radioValue = "true";
  autotype = "A";
  _date = new Date();
  timeOption = [
    { value: 1, label: '周一'},
    { value: 2, label: '周二'},
    { value: 3, label: '周三'},
    { value: 4, label: '周四'},
    { value: 5, label: '周五'},
    { value: 6, label: '周六'},
    { value: 7, label: '周日'}
  ];
  selectedOption;
  selectedOptionDisabled = false;
  constructor(private autoUpdateService: AutoUpdateService) { 
   this.selectedOption = this.timeOption[0];
 }

  ngOnInit() {
    this.query();
  }
  
  query(){
    this.autoUpdateService.queryMapip().then((data: any) => {
      this._dataMapIp = data;
    });
    this.autoUpdateService.queryMapip().then((data: any) => {
      this._dataSet = data;
    });
  }
  radioClick(){
    if (this.autotype=="A") {
      this.selectedOptionDisabled = false;
    }else{
      this.selectedOptionDisabled = true;
    }
  }
}

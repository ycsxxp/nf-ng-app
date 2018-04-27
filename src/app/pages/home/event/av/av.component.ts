import { Component, OnInit } from '@angular/core';
import { AvService } from './av.service';
@Component({
  selector: 'app-av',
  templateUrl: './av.component.html',
  styleUrls: ['./av.component.css']
})
export class AvComponent implements OnInit {
  public timeOption = [
    { value: 5, label: '5秒'},
    { value: 10, label: '10秒'},
    { value: 30, label: '30秒'},
    { value: 60, label: '60秒'}
  ];
  public selectedtimeOption;
  public switchValue = false;
  public timeer;
  public count;
  _dataSet = [];//显示的数据,异步获取
  _loading = false;
  constructor(private avService: AvService) { }

  ngOnInit() {
    this.selectedtimeOption = this.timeOption[0];
    this.query();
  }
  switchValueClick(){
    if (this.switchValue) {
      this.timeer = setInterval(() => {
          this.query();
      }, this.selectedtimeOption.value*1000);
    }else{
      clearInterval(this.timeer);
    }
  }
  query(){
    this._loading = true;
    this.avService.query().then((data: any) => {
      this._dataSet = data;
      this.count = data.length;
      this._loading = false;
    });
  }

  nzPageSizeChange(event) {
  }
  nzPageIndexChange(event) {
    this.query();
  }
  nzPageIndexClickChange(event) {
  }

}

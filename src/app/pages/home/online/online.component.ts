import { Component, OnInit } from '@angular/core';
import { OnlineService } from './online.service';
@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  public timeOption = [
    { value: 5, label: '5秒'},
    { value: 10, label: '10秒'},
    { value: 30, label: '30秒'},
    { value: 60, label: '60秒'}
  ];
  public selectedtimeOption;
  public switchValue = true;
  public timeer;
  public count;
  _current = 1;//当前页
  _pageSize = 10;//每页的数量
  _total = 100;//总数 异步获取
  _dataSet = [];//显示的数据,异步获取
  _loading = false;
  constructor(private onlineService: OnlineService) { }

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
    this.onlineService.query(this._current,this._pageSize).then((data: any) => {
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

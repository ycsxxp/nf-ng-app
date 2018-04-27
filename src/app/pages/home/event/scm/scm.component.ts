import { Component, OnInit } from '@angular/core';
import { ScmService } from './scm.service';
@Component({
  selector: 'app-scm',
  templateUrl: './scm.component.html',
  styleUrls: ['./scm.component.css']
})
export class ScmComponent implements OnInit {
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
  constructor(private scmService: ScmService) { }

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
    this.scmService.query().then((data: any) => {
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

import { Component, OnInit } from '@angular/core';
import { MonitorService } from './monitor.service';
@Component({
  selector: 'app-wireless',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  _current = 1;//当前页
  _pageSize = 10;//每页的数量
  _total = 100;//总数 异步获取
  _dataSet = [];//显示的数据,异步获取
  _loading = false;
  public input_type = [
    { value: '0', label: '全部' },
    { value: '6', label: '疑是共享设备' },
    { value: '1', label: '无线设备' }
  ];
  public input_os;
  public selectedInput_os;
  public input_br;
  public selectedInput_br;
  public input_av;
  public selectedInput_av;
  public timeOption = [
    { value: 5, label: '5秒'},
    { value: 10, label: '10秒'},
    { value: 30, label: '30秒'},
    { value: 60, label: '60秒'}
  ];
  public selectedtimeOption;
  

  public wireless=this.input_type[0];
  public ip;
  public switchValue = true;
  public timeer;
  constructor(private monitorService: MonitorService) { }

  ngOnInit() {
    this.getOsOptionData();
    this.getBrOptionData();
    this.getAvOptionData();
    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        os: 'ICMP协议',
        app: '1',
        type: '无线设备',
        ip: '100.1.1.1:0',
        topdown: 'yang',
        dst: '41.10.10.156:0'
      });
    }
    this.selectedtimeOption = this.timeOption[0];
  }
  switchValueClick(){
    if (this.switchValue) {
      this.timeer = setInterval(() => {
          this.refresh();
      }, this.selectedtimeOption.value*1000);
    }else{
      clearInterval(this.timeer);
    }
  }
  query(){
    console.log(this.selectedInput_os);
    console.log(this.ip);
    console.log(this.wireless);
    this.monitorService.query(this.ip,this.wireless.value,this.selectedInput_os).then((data: any) => {
      //TO DO
    });
  }
  refresh(){}
  clearData(){
    this.monitorService.clearData().then((data: any) => {
      //TO DO
    });
  }
  getOsOptionData(){
    this.monitorService.getOsOptionData().then((data: any) => {
      this.input_os = data;
    });
  }
  getBrOptionData(){
    this.monitorService.getBrOptionData().then((data: any) => {
      this.input_br = data;
    });
  }
  getAvOptionData(){
    this.monitorService.getAvOptionData().then((data: any) => {
      this.input_av = data;
    });
  }
  nzPageIndexChange(event) {
    this.query();
  }
}

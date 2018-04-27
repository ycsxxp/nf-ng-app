import { Component, OnInit } from '@angular/core';
import { WirelessService } from './wireless.service';
@Component({
  selector: 'app-wireless',
  templateUrl: './wireless.component.html',
  styleUrls: ['./wireless.component.css']
})
export class WirelessComponent implements OnInit {
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
  public input_os = [
    { value: 'Windows 7', label: 'Windows 7'},
    { value: 'Windows 8/Windows 2012', label: 'Windows 8/Windows 2012'},
    { value: 'Windows 8.1/Windows 2012', label: 'Windows 8.1/Windows 2012'},
    { value: 'Windows Vista', label: 'Windows Vista'}
  ];
  public timeOption = [
    { value: 5, label: '5秒'},
    { value: 10, label: '10秒'},
    { value: 30, label: '30秒'},
    { value: 60, label: '60秒'}
  ];
  public selectedtimeOption;
  public selectedInput_os;
  public wireless=this.input_type[0];
  public ip;
  public switchValue = true;
  public timeer;
  constructor(private wirelessService: WirelessService) { }

  ngOnInit() {
    this.getOsOptionData();
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
    this.wirelessService.query(this.ip,this.wireless.value,this.selectedInput_os).then((data: any) => {
      //TO DO
    });
  }
  refresh(){}
  clearData(){
    this.wirelessService.clearData().then((data: any) => {
      //TO DO
    });
  }
  getOsOptionData(){
    this.wirelessService.getOsOptionData().then((data: any) => {
      this.input_os = data;
    });
  }
  nzPageIndexChange(event) {
    this.query();
  }
}

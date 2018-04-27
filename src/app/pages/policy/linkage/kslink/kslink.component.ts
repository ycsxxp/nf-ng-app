import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-linkage-kslink',
  templateUrl: './kslink.component.html',
  styleUrls: ['./kslink.component.css']
})
export class KslinkComponent implements OnInit {

  public enabled = false
  public zones = [
    { value: 'global', label: 'global' },
    { value: 'Transparent', label: 'Transparent' },
    { value: 'DMZ', label: 'DMZ' },
    { value: 'Intranet', label: 'Intranet' },
    { value: 'Extranet', label: 'Extranet' },
    { value: 'Monitor', label: 'Monitor' },
    { value: 'VWireZone', label: 'VWireZone' }
  ]
  public zone = [ 'global', 'DMZ' ]

  public objects = [
    { value: '110001', label: 'any' },
    { value: '110002', label: '192.168.0.0' },
    { value: '110003', label: '10.0.0.0' },
    { value: '120001', label: '1.1.1.1' }
  ]
  public object = [ '110001', '120001' ]

  public exceptions = [
    { value: '110001', label: 'any' },
    { value: '110002', label: '192.168.0.0' },
    { value: '110003', label: '10.0.0.0' },
    { value: '120001', label: '1.1.1.1' }
  ]
  public exception = [ '110001', '120001' ]
  
  public av_version = false
  public vulnerabilities = false

  public tableHeader = [
    { title: '主机名' },
    { title: 'IP' },
    { title: 'MAC' },
    { title: '病毒库版本' },
    { title: '高危漏洞' }
  ]
  // 查找
  public _search: string
  public _dataSet = []
  // 当前页数
  public _current = 1
  // 全选
  public _allChecked = false;
  public _indeterminate = false;

  public _refreshStatus() {
    const allChecked = this._dataSet.every(value => value.checked === true)
    const allUnChecked = this._dataSet.every(value => !value.checked)
    this._allChecked = allChecked
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }
  public _checkAll(value) {
    if (value) {
      this._dataSet.forEach(data => data.checked = true);
    } else {
      this._dataSet.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }
  
  constructor() { }

  ngOnInit() {

  }

}

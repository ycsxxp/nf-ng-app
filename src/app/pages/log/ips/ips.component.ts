import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.css']
})
export class IpsComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public selectedAction: Object
  public actions = [
    { value: '0', label: '全部' },
    { value: '1', label: '允许' },
    { value: '2', label: '阻断' }
  ]

  public selectedModule: Object
  public modules = [
    { value: 'all', label: '全部' },
    { value: 'fw', label: 'ACL' },
    { value: 'ipmac', label: 'ARP表绑定' },
    { value: 'vlanmac', label: 'MAC表绑定' },
    { value: 'layer2', label: '二层协议控制' }
  ]

  public _dataSet = []
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.selectedAction = this.actions[0]
    this.selectedModule = this.modules[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        event: 'ICMP协议',
        src_ip: '100.1.1.1',
        src_port: '80',
        user: 'yang',
        dst_ip: '41.10.10.156'
      });
    }
  }

}

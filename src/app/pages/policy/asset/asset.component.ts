import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
@Component({
  selector: 'app-policy-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
  animations: [
    trigger('selectPane', [
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(300)
      ]),
      transition('* => void', animate(100, style({transform: 'translateX(100%)'})))
    ])
  ]
})
export class AssetComponent implements OnInit {

  public enable = true
  public ingress_zones = [
    { id: '0', check: false, label: 'global', value: 'global' },
    { id: '1', check: false, label: 'Transparent', value: 'Transparent' },
    { id: '2', check: false, label: 'DMZ', value: 'DMZ' },
    { id: '3', check: false, label: 'Intranet', value: 'Intranet' },
    { id: '4', check: false, label: 'Extranet', value: 'Extranet' },
    { id: '5', check: false, label: 'Monitor', value: 'Monitor' },
    { id: '6', check: false, label: 'VWireZone', value: 'VWireZone' }
  ]

  // 存储选中的数组
  public selectedArr = []

  public showWrap = false
  public _value: string
  public showOptions() {
    this.showWrap = true
  }
  public closeOptions() {
    this.showWrap = false
  }
  public optionCheck(option) {
    this.ingress_zones[option.id].check = true
    this.selectedArr.push(option)
  }
  constructor() { }

  ngOnInit() {
  }

}

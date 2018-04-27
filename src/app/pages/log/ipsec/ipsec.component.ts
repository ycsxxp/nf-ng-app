import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipsec',
  templateUrl: './ipsec.component.html',
  styleUrls: ['./ipsec.component.css']
})
export class IpsecComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public module: Object
  public modules = [
    { value: 'ALL', label: '全部' },
    { value: 'PLUTO', label: 'PLUTO' },
    { value: 'IPSEC', label: 'IPSEC' }
  ]
  
  public level: Object
  public levels = [
    { value: 'ALL', label: '全部' },
    { value: 'ERROR', label: 'ERROR' },
    { value: 'WARN', label: 'WARN' },
    { value: 'INFO', label: 'INFO' },
    { value: 'DEBUG', label: 'DEBUG' }
  ]

  public _dataSet = []

  constructor() { }

  ngOnInit() {
    this.module = this.modules[0]
    this.level = this.levels[0]
    
    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        type: 'PLUTO',
        level: 'WARN',
        description: '这是描述'
      });
    }
  }

}

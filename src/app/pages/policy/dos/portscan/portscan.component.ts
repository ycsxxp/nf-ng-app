import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-dos-portscan',
  templateUrl: './portscan.component.html',
  styleUrls: ['./portscan.component.css']
})
export class PortscanComponent implements OnInit {
  
  public tcpportscan_check = false

  // 全选
  
  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-dos-flood',
  templateUrl: './flood.component.html',
  styleUrls: ['./flood.component.css']
})
export class FloodComponent implements OnInit {
  
  public pingflood_check = false
  public pingflood_protect = false

  public udpflood_check = false
  public udpflood_protect = false

  public synflood_check = false
  public synflood_protect = false

  public dnsreplyflood_check = false
  public dnsreplyflood_protect = false

  public dnsreqflood_check = false
  public dnsreqflood_protect = false

  // 全选
  
  constructor() { }

  ngOnInit() {

  }

}

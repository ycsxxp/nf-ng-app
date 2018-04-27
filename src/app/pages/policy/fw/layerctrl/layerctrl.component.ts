import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-fw-layerctrl',
  templateUrl: './layerctrl.component.html',
  styleUrls: ['./layerctrl.component.css']
})
export class LayerctrlComponent implements OnInit {
  
  public enabled_bpdu = false
  public action_bpdu = true
  public log_bpdu = false

  public enabled_8021q = false
  public action_8021q = true
  public log_8021q = false

  public enabled_slow = false
  public action_slow = true
  public log_slow = false

  public enabled_mpls = false
  public action_mpls = true
  public log_mpls = false

  public enabled_mpls_multi = false
  public action_mpls_multi = true
  public log_mpls_multi = false

  public enabled_pppoe = false
  public action_pppoe = true
  public log_pppoe = false

  public enabled_pppoe_session = false
  public action_pppoe_session = true
  public log_pppoe_session = false

  public enabled_qinq = false
  public action_qinq = true
  public log_qinq = false

  constructor() { }

  ngOnInit() {

  }

}

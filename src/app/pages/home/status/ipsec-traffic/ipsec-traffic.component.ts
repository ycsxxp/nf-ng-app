import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipsec-traffic',
  templateUrl: './ipsec-traffic.component.html',
  styleUrls: ['./ipsec-traffic.component.css']
})
export class IpsecTrafficComponent implements OnInit {
  data = [
      {
        name: 'M',
        isUp:'true',
        manageable: '-',
        ip: "10.245.25.119/16",
        linkmode: 'Full',
        inkspeed: ' 1000Mb/s',
        zone: '-',
        send: '0/0',
        recv: '0/0',
      },{
        name: 'M',
        isUp:'false',
        manageable: '-',
        ip: "10.245.25.119/16",
        linkmode: 'Full',
        inkspeed: ' 1000Mb/s',
        zone: '-',
        send: '0/0',
        recv: '0/0',
      }, {
        name: 'M',
        isUp:'true',
        manageable: '-',
        ip: "10.245.25.119/16",
        linkmode: 'Full',
        inkspeed: ' 1000Mb/s',
        zone: '-',
        send: '0/0',
        recv: '0/0',
      }
    ];
  constructor() { 
    
  }

  ngOnInit() {
  }

}

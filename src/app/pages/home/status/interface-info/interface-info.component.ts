import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-info',
  templateUrl: './interface-info.component.html',
  styleUrls: ['./interface-info.component.css']
})
export class InterfaceInfoComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}

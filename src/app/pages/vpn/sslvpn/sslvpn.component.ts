import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SslvpnService } from './sslvpn.service';
@Component({
  selector: 'app-sslvpn',
  templateUrl: './sslvpn.component.html',
  styleUrls: ['./sslvpn.component.css']
})
export class SslvpnComponent implements OnInit {
  constructor(private sslvpnService: SslvpnService, private router: Router, private activatedRoute: ActivatedRoute) { }
  index: any;
  nzSelectedIndex = 0;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.index = params['index'];
      if (this.index !== undefined){
        this.nzSelectedIndex = this.index;
      }
    });
  }
  nzPageSizeChange(event) {
  }
  nzPageIndexChange(event) {
  }
  nzPageIndexClickChange(event) {
  }

}

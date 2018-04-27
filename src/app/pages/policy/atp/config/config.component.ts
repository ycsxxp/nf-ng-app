import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-policy-atp-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public rangeValueAtp = [2, 4]
  public marks = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
  public enabled = true
  
  public protocol = [
    { label: 'HTTP', value: 'http' },
    { label: 'FTP', value: 'ftp' },
    { label: 'SMTP', value: 'smtp' },
    { label: 'POP3', value: 'pop3' },
  ]

  public options_pe = [
    { label: 'exe', value: 'exe' },
    { label: 'bat', value: 'bat' },
    { label: 'dll', value: 'dll' },
    { label: 'com', value: 'com' },
    { label: 'scr', value: 'scr' },
    { label: 'pif', value: 'pif' }
  ]
  public options_zipfile = [
    { label:'zip', value: 'zip' },
    { label:'rar', value: 'rar' },
    { label:'gzip', value: 'gzip' },
    { label:'tar', value: 'tar' },
    { label:'7z', value: '7z' },
    { label:'bz', value: 'bz' },
    { label:'bz2', value: 'bz2' }
  ]
  public options_document = [
    { label: 'doc', value: 'doc' },
    { label: 'docx', value: 'docx' },
    { label: 'wps', value: 'wps' },
    { label: 'wpt', value: 'wpt' },
    { label: 'dot', value: 'dot' },
    { label: 'rtf', value: 'rtf' },
    { label: 'ppt', value: 'ppt' },
    { label: 'pptx', value: 'pptx' },
    { label: 'dps', value: 'dps' },
    { label: 'dpt', value: 'dpt' },
    { label: 'pot', value: 'pot' },
    { label: 'pps', value: 'pps' },
    { label: 'xls', value: 'xls' },
    { label: 'xlsx', value: 'xlsx' },
    { label: 'xlt', value: 'xlt' },
    { label: 'et', value: 'et' },
    { label: 'ett', value: 'ett' },
    { label: 'mpp', value: 'mpp' },
    { label: 'pdf', value: 'pdf' }
  ]
  public options_sobj = [
    { label: 'any', value: 'any' },
    { label: '192.168.0.0', value: '192.168.0.0' }
  ]
  public options_dobj = [
    { label: 'any', value: 'any' },
    { label: '192.168.0.0', value: '192.168.0.0' }
  ]

  public limiation = 5

  @ViewChild('nzSliderAtp') private sliderDiv: ElementRef

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    
  }

  ngOnInit() {

  }
  ngAfterViewChecked() {
    // 绿色 #a5d770 红色 #ff5252
    // 绿色 #48c35d 红色 #cc2e2f
    if (this.enabled) {
      let offsetMin = this.rangeValueAtp[0] * 20
      this.renderer.setElementStyle(this.sliderDiv['slider'].nativeElement.querySelector('div.ant-slider-rail'), 'backgroundImage', 'linear-gradient(to right, #a5d770 '+ offsetMin +'%, #ff5252 '+ offsetMin +'%, #ff5252 100%)')
    }
  }

}

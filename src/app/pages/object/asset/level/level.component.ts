import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-asset-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  public os_windows = [
    { name: 'Windows 7', level: '1', defaultlevel: '1' },
    { name: 'Windows 8/Windows 2012', level: '1', defaultlevel: '1' },
    { name: 'Windows 8.1/Windows 2012', level: '1', defaultlevel: '1' }, 
    { name: 'Windows Vista', level: '1', defaultlevel: '1' }, 
    { name: 'Windows XP', level: '3', defaultlevel: '3' }, 
    { name: 'Windows 2000', level: '4', defaultlevel: '4' }, 
    { name: 'Windows 2003', level: '4', defaultlevel: '4' }, 
    { name: 'Windows 2008', level: '4', defaultlevel: '4' }, 
    { name: 'Windows 10/Windows 2016', level: '1', defaultlevel: '1' }, 
    { name: 'Windows', level: '1', defaultlevel: '1' }
  ]

  public os_linux = [
    { name: 'Ubuntu', level: '0', defaultlevel: '0' },
    { name: 'Debian', level: '0', defaultlevel: '0' },
    { name: 'SUSE', level: '0', defaultlevel: '0' },
    { name: 'openSUSE', level: '0', defaultlevel: '0' },
    { name: 'Fedora', level: '0', defaultlevel: '0' },
    { name: 'Gentoo', level: '0', defaultlevel: '0' },
    { name: 'Red Hat', level: '0', defaultlevel: '0' },
    { name: 'CentOS', level: '0', defaultlevel: '0' },
    { name: 'Android', level: '1', defaultlevel: '1' },
    { name: 'Linux', level: '0', defaultlevel: '0' }
  ]

  public os_unix = [
    { name: 'FreeBSD', level: '0', defaultlevel: '0' },
    { name: 'Sun Solaris', level: '0', defaultlevel: '0' },
    { name: 'NetBSD', level: '0', defaultlevel: '0' },
    { name: 'OpenBSD', level: '0', defaultlevel: '0' },
    { name: 'AIX', level: '0', defaultlevel: '0' },
    { name: 'HP-UX', level: '0', defaultlevel: '0' },
    { name: 'Unix', level: '0', defaultlevel: '0' },
    { name: 'Mac OS X', level: '0', defaultlevel: '0' },
    { name: 'iOS', level: '0', defaultlevel: '0' }
  ]

  public browser_ie_other = [
    { name: 'QQ', level: '1', defaultlevel: '1' },
    { name: '360', level: '1', defaultlevel: '1' },
    { name: 'UC', level: '1', defaultlevel: '1' },
    { name: 'Maxthon', level: '1', defaultlevel: '1' },
    { name: 'Sogou', level: '1', defaultlevel: '1' },
    { name: 'Liebao', level: '1', defaultlevel: '1' },
    { name: 'Taobao', level: '1', defaultlevel: '1' },
    { name: 'TheWorld', level: '1', defaultlevel: '1' }
  ]
  public browser_new = [
    { name: 'Opera', level: '0', defaultlevel: '0' },
    { name: 'Chrome', level: '0', defaultlevel: '0' },
    { name: 'Firefox', level: '0', defaultlevel: '0' },
    { name: 'OmniWeb', level: '0', defaultlevel: '0' },
    { name: 'Safari', level: '0', defaultlevel: '0' }
  ]
  public browser_ie = [
    { name: 'IE6', level: '3', defaultlevel: '3' },
    { name: 'IE7', level: '3', defaultlevel: '3' },
    { name: 'IE8', level: '3', defaultlevel: '3' },
    { name: 'IE9', level: '3', defaultlevel: '3' },
    { name: 'IE10', level: '2', defaultlevel: '2' },
    { name: 'IE11', level: '1', defaultlevel: '1' },
    { name: 'IE', level: '2', defaultlevel: '2' }
  ]
  public avsoft = [
    { name: 'KingSoft Anti-Virus', title: '金山毒霸', level: '1', defaultlevel: '1' },
    { name: 'KingSoft PC Doctor', title: '金山卫士', level: '1', defaultlevel: '1' },
    { name: 'KingSoft V8+', title: '金山V8+终端安全系统', level: '1', defaultlevel: '1' },
    { name: '360', title: '360杀毒', level: '3', defaultlevel: '3' },
    { name: 'KV', title: '江民杀毒', level: '1', defaultlevel: '1' },
    { name: 'AVAST', title: '爱维士', level: '0', defaultlevel: '0' },
    { name: 'AntiVir', title: '小红伞', level: '0', defaultlevel: '0' },
    { name: 'RISING', title: '瑞星杀毒', level: '1', defaultlevel: '1' },
    { name: 'Kaspersky', title: '卡巴斯基', level: '0', defaultlevel: '0' },
    { name: 'MSE', title: '微软安全软件', level: '0', defaultlevel: '0' },
    { name: 'Norton', title: '诺顿', level: '0', defaultlevel: '0' },
    { name: 'McAfee', title: '迈克菲', level: '0', defaultlevel: '0' },
  ]
  
  public levels = [
     { value: '4', label: '高' },
     { value: '3', label: '较高' },
     { value: '2', label: '中' },
     { value: '1', label: '较低' },
     { value: '0', label: '低' }
  ]
  // 查找
  public _search: string
  public _dataSet = []
  // 当前页数
  public _current = 1
  // 全选
  public _allChecked = false;
  public _indeterminate = false;

  public _refreshStatus() {
    const allChecked = this._dataSet.every(value => value.checked === true)
    const allUnChecked = this._dataSet.every(value => !value.checked)
    this._allChecked = allChecked
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }
  public _checkAll(value) {
    if (value) {
      this._dataSet.forEach(data => data.checked = true);
    } else {
      this._dataSet.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }
  
  constructor() { }

  ngOnInit() {

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        id: '1',
        level: '0',
        ip: '10.66.250.1',
        os: 'Windows 10',
        br: 'Chrome',
        app: '',
        traffic: '0.0 bps / 0.0 bps',
        av: 'KingSoft PC Doctor',
        service: 'systat[t]',
        source: '手动',
        action: '编辑'
      });
    }
  }

}

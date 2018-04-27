import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-profile-ips',
  templateUrl: './ips.component.html',
  styleUrls: ['./ips.component.css']
})
export class IpsComponent implements OnInit {
  public template_tableHeader = [
    { title: '名称' },
    { title: '描述' },
    { title: '操作' }
  ]
  public custom_template_tableHeader = [
    { title: '编号' },
    { title: '名称' },
    { title: '事件详情' },
    { title: '例外规则' },
    { title: '白名单' },
    { title: '备注' },
    { title: '操作' }
  ]

  public sys_template_table_dataSet = [
    { key: 0, name: 'Default', desc: '适用于大多数环境', action: '操作'},
    { key: 1, name: 'DMZ区服务器', desc: '所有攻击类型规则，使用 TFTP、Telnet、RIP、NETBIOS、NFS 和 WINS 的利用漏洞攻击规则除外。', action: '操作'},
    { key: 2, name: '内网客户端', desc: '所有攻击规则，使用 RIP 和路由协议的利用漏洞攻击规则除外。', action: '操作'},
    { key: 3, name: 'Web服务器', desc: '所有侦测和 DoS 攻击规则、一般后门程序以及使用 DNS、HTTP 和 FTP 协议的利用漏洞攻击规则。', action: '操作'},
    { key: 4, name: 'Windows服务器', desc: '受影响的操作系统包括 Windows 的所有攻击规则。', action: '操作'},
    { key: 5, name: '通用服务器', desc: '所有侦测和 DoS 攻击规则、一般后门程序以及使用 DNS、SMTP、POP3 、IMAP 、DNS、NFS/RPC 和 NETBIOS/SMB协议的利用漏洞攻击规则。', action: '操作'},
    { key: 6, name: 'UNIX类服务器', desc: '受影响的操作系统包括 UNIX、Linux 、Solaris 的所有攻击规则。', action: '操作'}
  ]
  public derive_template_table_dataSet = []
  public custom_template_table_dataSet = []
  // 查找
  public _search: string
  // 当前页数
  public _current = 1
  // 全选
  public _allChecked = false;
  public _indeterminate = false;

  public _refreshStatus() {
    const allChecked = this.custom_template_table_dataSet.every(value => value.checked === true)
    const allUnChecked = this.custom_template_table_dataSet.every(value => !value.checked)
    this._allChecked = allChecked
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }
  public _checkAll(value) {
    if (value) {
      this.custom_template_table_dataSet.forEach(data => data.checked = true);
    } else {
      this.custom_template_table_dataSet.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-fw',
  templateUrl: './fw.component.html',
  styleUrls: ['./fw.component.css']
})
export class FwComponent implements OnInit {
  public panel = {
    active: false,
    name: '条件',
    disabled: false
  }

  public selectedAction: Object
  public actions = [
    { value: '0', label: '全部' },
    { value: '1', label: '允许' },
    { value: '2', label: '阻断' }
  ]

  public selectedModule: Object
  public modules = [
    { value: 'all', label: '全部' },
    { value: 'fw', label: 'ACL' },
    { value: 'ipmac', label: 'ARP表绑定' },
    { value: 'vlanmac', label: 'MAC表绑定' },
    { value: 'layer2', label: '二层协议控制' }
  ]

  public input_risks = [
    { value: '5', label: '5 高'},
    { value: '4', label: '4 较高'},
    { value: '3', label: '3 中'},
    { value: '2', label: '2 较低'},
    { value: '1', label: '1 低'}
  ]

  public categories = [
    {
      value: 'biz',
      label: '商业系统',
      children: [
        {
          value: 'auth',
          label: '认证服务',
          isLeaf: true
        }, {
          value: 'db',
          label: '数据库',
          isLeaf: true
        }, {
          value: 'erp-crm',
          label: 'ERP-CRM',
          isLeaf: true
        }, {
          value: 'gen-biz',
          label: '普通商业',
          isLeaf: true
        }, {
          value: 'mgmt',
          label: '管理软件',
          isLeaf: true
        }, {
          value: 'office',
          label: '办公软件',
          isLeaf: true
        }, {
          value: 'update',
          label: '软件更新',
          isLeaf: true
        }, {
          value: 'storage',
          label: '存储备份',
          isLeaf: true
        }
      ]
    }, {
      value: 'co',
      label: '协作类应用',
      children: [
        {
          value: 'email',
          label: '电子邮件',
          isLeaf: true
        }, {
          value: 'im',
          label: '即时通信',
          isLeaf: true
        }, {
          value: 'net-meeting',
          label: '网络会议',
          isLeaf: true
        }, {
          value: 'social-biz',
          label: '社交商业',
          isLeaf: true
        }, {
          value: 'social-net',
          label: '社交网络',
          isLeaf: true
        }, {
          value: 'voip',
          label: 'voip视频',
          isLeaf: true
        }, {
          value: 'web-post',
          label: '论坛贴吧',
          isLeaf: true
        }
      ]
    }, {
      value: 'internet',
      label: '一般网络应用',
      children: [
        {
          value: 'file-share',
          label: '文件共享',
          isLeaf: true
        }, {
          value: 'file-trans',
          label: '文件传输',
          isLeaf: true
        }, {
          value: 'internet-utility',
          label: '互联网程序',
          isLeaf: true
        }, {
          value: 'wkn-website',
          label: '知名网站',
          isLeaf: true
        }
      ]
    }, {
      value: 'media',
      label: '媒体类',
      children: [
        {
          value: 'audio',
          label: '音频流',
          isLeaf: true
        }, {
          value: 'game',
          label: '游戏',
          isLeaf: true
        }, {
          value: 'photo-video',
          label: '图片视频',
          isLeaf: true
        }
      ],
    }, {
      value: 'net',
      label: '网络',
      children: [
        {
          value: 'crypt-tunnel',
          label: '加密隧道',
          isLeaf: true
        }, {
          value: 'infrastructure',
          label: '网络基础设施',
          isLeaf: true
        }, {
          value: 'ip-proto',
          label: 'IP协议',
          isLeaf: true
        }, {
          value: 'proxy',
          label: '代理',
          isLeaf: true
        }, {
          value: 'remote-access',
          label: '远程登录',
          isLeaf: true
        }, {
          value: 'route',
          label: '路由',
          isLeaf: true
        }
      ],
    }, {
      value: 'unknown',
      label: '未知'
    }
  ]

  public _dataSet = []

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.selectedAction = this.actions[0]
    this.selectedModule = this.modules[0]

    for (let i = 0; i < 5; i++) {
      this._dataSet.push({
        key    : i,
        time   : '2017-10-18 18:27:55',
        app_name: 'ICMP协议',
        rule_id: '1',
        module: 'ACL',
        src: '100.1.1.1:0',
        user: 'yang',
        dst: '41.10.10.156:0',
        nat_src: '',
        nat_dst: '',
        protocol: 'icmp',
        src_card: 'G1/3',
        dst_card: 'G1/4',
        session: '结束',
        desc: ''
      });
    }
  }

}

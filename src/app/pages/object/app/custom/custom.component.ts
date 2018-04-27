import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  public panel = {
    active: false,
    name: '查询条件',
    disabled: false
  }

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

  public technology
  public technologys = [
    { value: 'bs', label: '基于浏览器'},
    { value: 'cs', label: '客户端-服务器'},
    { value: 'proto', label: '网络协议'},
    { value: 'p2p', label: 'P2P'},
    { value: 'unknown', label: '未知技术'}
  ]

  public risk = [
    { label: '低', value: '1', checked: false },
    { label: '较低', value: '2', checked: false },
    { label: '中', value: '3', checked: false },
    { label: '较高', value: '4', checked: false },
    { label: '高', value: '5', checked: false },
  ]

  public tags = [
    { value: 'unknown', label: '未知'},
    { value: 'evasive', label: '易规避'},
    { value: 'exband', label: '消耗带宽'},
    { value: 'misuse', label: '容易误操作'},
    { value: 'transfer', label: '传输文件'},
    { value: 'tunnel', label: '以其他应用为管道'},
    { value: 'malware', label: '易被恶意软件利用'},
    { value: 'vulner', label: '包含漏洞'},
    { value: 'widely', label: '广泛使用'},
    { value: 'mobile', label: '运行于移动设备'}
  ]

  public tableHeader = [
    { title: '名称' },
    { title: '风险等级' },
    { title: '类别' },
    { title: '子类' },
    { title: '实现技术' },
    { title: '自动识别状态' },
    { title: '操作' }
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
    let allCheckedArr = []
    for (let i in this.expandDataCache) {
      if(this.expandDataCache[i].length > 1) {
        for (var j = 1; j < this.expandDataCache[i].length; ++j) {
          allCheckedArr.push(this.expandDataCache[i][j].checked === true)
        }
      }else {
        allCheckedArr.push(this.expandDataCache[i].every(value => value.checked === true ))
      }
    }
    const allChecked = allCheckedArr.every(value => value === true)

    let allUnCheckedArr = []
    for (let i in this.expandDataCache) {
      if(this.expandDataCache[i].length > 1) {
        for (var j = 1; j < this.expandDataCache[i].length; ++j) {
          allUnCheckedArr.push(!this.expandDataCache[i][j].checked)
        }
      }else {
        allUnCheckedArr.push(this.expandDataCache[i].every(value => !value.checked))
      }
    }
    const allUnChecked = allUnCheckedArr.every(value => value )
    this._allChecked = allChecked
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  public _checkAll(value) {
    for (let i in this.expandDataCache) {
      this.expandDataCache[i].forEach(data => { data.checked = value })
    }
    this._refreshStatus();
  }
  
  // 树形表格相关
  public expandDataCache = {}
  public collapse(array, data, $event) {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key);
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }
  public convertTreeToList(root) {
    const stack = [], array = [], hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[ i ], level: node.level + 1, expand: false, parent: node });
        }
      }
    }
    return array;
  }
  public visitNode(node, hashMap, array) {
    if (!hashMap[ node.key ]) {
      hashMap[ node.key ] = true;
      array.push(node);
    }
  }
  //end

  constructor() { }

  ngOnInit() {

    this._dataSet = [
      {
        key: 1,
        name: '名称',
        risk: '1',
        cat: '商业系统',
        subcat: '认证服务',
        technology: '基于浏览器',
        secg: '',
        action: '编辑'
      }, {
        key: 2,
        name: '名称',
        children: [
          {
            key: 21,
            name: '名称11',
            risk: '1',
            cat: '网络',
            subcat: 'IP协议',
            technology: '基于浏览器',
            secg: '',
            action: '编辑'
          }, {
            key: 22,
            name: '名称12',
            risk: '1',
            cat: '网络',
            subcat: 'IP协议',
            technology: '基于浏览器',
            secg: '',
            action: '编辑'
          }
        ]
      }, {
        key: 3,
        name: '名称',
        risk: '1',
        cat: '商业系统',
        subcat: '认证服务',
        technology: '基于浏览器',
        secg: '',
        action: '编辑'
      }
    ]
    
    this._dataSet.forEach(item => {
      this.expandDataCache[ item.key ] = this.convertTreeToList(item);
    });
  }

}

import { LoginComponent } from '../login/login.component'
import { LayoutComponent } from '../layout/layout.component'
const children = []
export const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home/configguide', pathMatch: 'full' },
			// 首页
      { path: 'home/configguide', loadChildren: '../pages/object/bwm/bwm.module#BwmModule' },
      { path: 'home/main', loadChildren: '../pages/home/main/main.module#MainModule' },
			// 网络配置
			// 网络配置-接口
      { path: 'network/interface', loadChildren: '../pages/network/interface/interface.module#InterfaceModule' },
      // 策略
      // 策略-安全策略
      { path: 'policy/fw/rule', loadChildren: '../pages/policy/fw/rule/rule.module#RuleModule' },
      { path: 'policy/fw/layerctrl', loadChildren: '../pages/policy/fw/layerctrl/layerctrl.module#LayerctrlModule' },
      // 策略-NAT
      { path: 'policy/nat/snat', loadChildren: '../pages/policy/nat/snat/snat.module#SnatModule' },
      { path: 'policy/nat/dnat', loadChildren: '../pages/policy/nat/dnat/dnat.module#DnatModule' },
      // 策略-高级威胁防护
      { path: 'policy/atp/config', loadChildren: '../pages/policy/atp/config/config.module#ConfigModule' },
      { path: 'policy/atp/status', loadChildren: '../pages/policy/atp/status/status.module#StatusModule' },
      // 策略-IPMAC绑定
      { path: 'policy/ipmacbind', loadChildren: '../pages/policy/ipmacbind/ipmacbind.module#IpmacbindModule' },
      // 策略-用户认证
      { path: 'policy/authorize/rule', loadChildren: '../pages/policy/authorize/rule/rule.module#RuleModule' },
      { path: 'policy/authorize/config', loadChildren: '../pages/policy/authorize/config/config.module#ConfigModule' },
      // 策略-资产识别
      { path: 'policy/asset', loadChildren: '../pages/policy/asset/asset.module#AssetModule' },
      // 策略-流量管理
      { path: 'policy/bwm', loadChildren: '../pages/policy/bwm/bwm.module#BwmModule' },
      // 策略-DOS防护
      { path: 'policy/dos/flood', loadChildren: '../pages/policy/dos/flood/flood.module#FloodModule' },
      { path: 'policy/dos/portscan', loadChildren: '../pages/policy/dos/portscan/portscan.module#PortscanModule' },
      { path: 'policy/dos/pingsweep', loadChildren: '../pages/policy/dos/pingsweep/pingsweep.module#PingsweepModule' },
      { path: 'policy/dos/arpspoof', loadChildren: '../pages/policy/dos/arpspoof/arpspoof.module#ArpspoofModule' },
      // 策略-信誉
      { path: 'policy/reputation/config', loadChildren: '../pages/policy/reputation/config/config.module#ConfigModule' },
      { path: 'policy/reputation/search', loadChildren: '../pages/policy/reputation/search/search.module#SearchModule' },
      // 策略-源IP联动封锁
      { path: 'policy/siplock/rule', loadChildren: '../pages/policy/siplock/rule/rule.module#RuleModule' },
      // 策略-外部联动
      { path: 'policy/linkage/rsaslink', loadChildren: '../pages/policy/linkage/rsaslink/rsaslink.module#RsaslinkModule' },
      { path: 'policy/linkage/kslink', loadChildren: '../pages/policy/linkage/kslink/kslink.module#KslinkModule' },
      { path: 'policy/linkage/saslink', loadChildren: '../pages/policy/linkage/saslink/saslink.module#SaslinkModule' },
      { path: 'policy/linkage/idslink', loadChildren: '../pages/policy/linkage/idslink/idslink.module#IdslinkModule' },
      { path: 'policy/linkage/cwlink', loadChildren: '../pages/policy/linkage/cwlink/cwlink.module#CwlinkModule' },
      // 策略-透明代理
      { path: 'policy/proxy/rule', loadChildren: '../pages/policy/proxy/rule/rule.module#RuleModule' },

      // 对象
      // 对象-安全模板
      { path: 'object/profile/ips', loadChildren: '../pages/object/profile/ips/ips.module#IpsModule' },
      { path: 'object/profile/urlfilter', loadChildren: '../pages/object/profile/urlfilter/urlfilter.module#UrlfilterModule' },
      { path: 'object/profile/av', loadChildren: '../pages/object/profile/av/av.module#AvModule' },
      { path: 'object/profile/scm', loadChildren: '../pages/object/profile/scm/scm.module#ScmModule' },
      { path: 'object/profile/wireless', loadChildren: '../pages/object/profile/wireless/wireless.module#WirelessModule' },
      { path: 'object/profile/group', loadChildren: '../pages/object/profile/group/group.module#GroupModule' },
      // 对象-网络
      { path: 'object/network/net', loadChildren: '../pages/object/network/net/net.module#NetModule' },
      { path: 'object/network/node', loadChildren: '../pages/object/network/node/node.module#NodeModule' },
      { path: 'object/network/mac', loadChildren: '../pages/object/network/mac/mac.module#MacModule' },
      { path: 'object/network/ippool', loadChildren: '../pages/object/network/ippool/ippool.module#IppoolModule' },
      { path: 'object/network/domain', loadChildren: '../pages/object/network/domain/domain.module#DomainModule' },
      { path: 'object/network/group', loadChildren: '../pages/object/network/group/group.module#GroupModule' },
      // 对象-用户
      { path: 'object/user/user', loadChildren: '../pages/object/user/user/user.module#UserModule' },
      { path: 'object/user/group', loadChildren: '../pages/object/user/group/group.module#GroupModule' },
      { path: 'object/user/domain', loadChildren: '../pages/object/user/domain/domain.module#DomainModule' },
      { path: 'object/user/auth', loadChildren: '../pages/object/user/auth/auth.module#AuthModule' },
      // 对象-服务
      { path: 'object/service/system', loadChildren: '../pages/object/service/system/system.module#SystemModule' },
      { path: 'object/service/custom', loadChildren: '../pages/object/service/custom/custom.module#CustomModule' },
      { path: 'object/service/group', loadChildren: '../pages/object/service/group/group.module#GroupModule' },
      // 对象-资产
      { path: 'object/asset/asset', loadChildren: '../pages/object/asset/asset/asset.module#AssetModule' },
      { path: 'object/asset/level', loadChildren: '../pages/object/asset/level/level.module#LevelModule' },
      // 对象-应用
      { path: 'object/app/app', loadChildren: '../pages/object/app/app/app.module#AppModule' },
      { path: 'object/app/custom', loadChildren: '../pages/object/app/custom/custom.module#CustomModule' },
      { path: 'object/app/filter', loadChildren: '../pages/object/app/filter/filter.module#FilterModule' },
      { path: 'object/app/group', loadChildren: '../pages/object/app/group/group.module#GroupModule' },
      { path: 'object/app/timeout', loadChildren: '../pages/object/app/timeout/timeout.module#TimeoutModule' },
      // 对象-事件
      { path: 'object/event/system', loadChildren: '../pages/object/event/system/system.module#SystemModule' },
      { path: 'object/event/rule', loadChildren: '../pages/object/event/rule/rule.module#RuleModule' },
      { path: 'object/event/custom', loadChildren: '../pages/object/event/custom/custom.module#CustomModule' },
      { path: 'object/event/group', loadChildren: '../pages/object/event/group/group.module#GroupModule' },
      // 对象-内容
      { path: 'object/scm/custom', loadChildren: '../pages/object/scm/custom/custom.module#CustomModule' },
      { path: 'object/scm/group', loadChildren: '../pages/object/scm/group/group.module#GroupModule' },
      { path: 'object/scm/keyword', loadChildren: '../pages/object/scm/keyword/keyword.module#KeywordModule' },
      // 对象-时间
      { path: 'object/time/custom', loadChildren: '../pages/object/time/custom/custom.module#CustomModule' },
      { path: 'object/time/group', loadChildren: '../pages/object/time/group/group.module#GroupModule' },
      // 对象-流量通道
      { path: 'object/bwm', loadChildren: '../pages/object/bwm/bwm.module#BwmModule' },


      // 日志
      { path: 'log/fw', loadChildren: '../pages/log/fw/fw.module#FwModule' },
      { path: 'log/ips', loadChildren: '../pages/log/ips/ips.module#IpsModule' },
      { path: 'log/ws', loadChildren: '../pages/log/ws/ws.module#WsModule' },
      { path: 'log/av', loadChildren: '../pages/log/av/av.module#AvModule' },
      { path: 'log/scm', loadChildren: '../pages/log/scm/scm.module#ScmModule' },
      { path: 'log/reputation', loadChildren: '../pages/log/reputation/reputation.module#ReputationModule' },
      { path: 'log/atp', loadChildren: '../pages/log/atp/atp.module#AtpModule' },
      { path: 'log/wireless', loadChildren: '../pages/log/wireless/wireless.module#WirelessModule' },
      { path: 'log/authorize', loadChildren: '../pages/log/authorize/authorize.module#AuthorizeModule' },
      { path: 'log/authorize-status', loadChildren: '../pages/log/authorize-status/authorize-status.module#AuthorizeStatusModule'},
      { path: 'log/netrun', loadChildren: '../pages/log/netrun/netrun.module#NetrunModule'},
      { path: 'log/ssl', loadChildren: '../pages/log/ssl/ssl.module#SslModule'},
      { path: 'log/ipsec', loadChildren: '../pages/log/ipsec/ipsec.module#IpsecModule'},
      { path: 'log/audit', loadChildren: '../pages/log/audit/audit.module#AuditModule'},

      // 报表
      { path: 'report/fw', loadChildren: '../pages/report/fw/fw.module#FwModule'},
      { path: 'report/interface', loadChildren: '../pages/report/interface/interface.module#InterfaceModule'},
      { path: 'report/ips', loadChildren: '../pages/report/ips/ips.module#IpsModule'},
      { path: 'report/ws', loadChildren: '../pages/report/ws/ws.module#WsModule'},
      { path: 'report/av', loadChildren: '../pages/report/av/av.module#AvModule'},
      { path: 'report/scm', loadChildren: '../pages/report/scm/scm.module#ScmModule'},
      { path: 'report/asset', loadChildren: '../pages/report/asset/asset.module#AssetModule'},
      { path: 'report/rsaslink', loadChildren: '../pages/report/rsaslink/rsaslink.module#RsaslinkModule'},
      //首页
      // { path: 'home/status', component: StatusComponent },
      // { path: 'home/status', loadChildren: '../pages/home/status/status.module#StatusModule' },
      // { path: 'home/wireless', loadChildren: '../pages/home/wireless/wireless.module#WirelessModule' },
      // { path: 'home/online', loadChildren: '../pages/home/online/online.module#OnlineModule' },
      // { path: 'asset/monitor', loadChildren: '../pages/home/asset/monitor.module#MonitorModule' },
      // { path: 'event/ips', loadChildren: '../pages/home/event/ips/ips.module#IpsModule' },
      // { path: 'event/av', loadChildren: '../pages/home/event/av/av.module#AvModule' },
      // { path: 'event/ws', loadChildren: '../pages/home/event/ws/ws.module#WsModule' },
      // { path: 'event/scm', loadChildren: '../pages/home/event/scm/scm.module#ScmModule' },
      // { path: 'home/healthStatus', loadChildren: '../pages/home/server/healthStatus/health-status.module#HealthStatusModule' },
      // { path: 'home/serverTraffic', loadChildren: '../pages/home/server/serverTraffic/server-traffic.module#ServerTrafficModule' },
      // //系统
      // { path: 'system/updateBack', loadChildren: '../pages/system/update/updateBack/update-back.module#UpdateBackModule' },
      // { path: 'system/update', loadChildren: '../pages/system/update/update/update.module#UpdateModule' },
      // { path: 'system/autoUpdate', loadChildren: '../pages/system/update/autoUpdate/auto-update.module#AutoUpdateModule' },
      // { path: 'system/backup', loadChildren: '../pages/system/backup/backup/backup.module#BackupModule' },
      // { path: 'system/restore', loadChildren: '../pages/system/backup/restore/restore.module#RestoreModule' },
      // { path: 'system/setting/engine', loadChildren: '../pages/system/setting/engine/engine.module#EngineModule' },
      //VPN 
      { path: 'vpn/sslvpn', loadChildren: '../pages/vpn/sslvpn/sslvpn.module#SslvpnModule' },
      // { path: 'object/keyword', component: KeywordComponent}
    ]
  }
]

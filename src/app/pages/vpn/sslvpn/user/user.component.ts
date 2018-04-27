import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SslvpnService } from '../sslvpn.service';
import { NzNotificationService } from 'ng-zorro-antd';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  _isSpinning = false
  public tableHeader = [
    { title: '名称' },
    { title: '操作' }
  ]
  // 查找
  public _search: string
  public _dataSet = []
  // 当前页数
  public currentPage = 1
  public pageSize = 10
  public total = 50
  public nzPageSizeSelectorValues = [10, 20, 30, 40]
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
  delete(id){
    const subscriptionedit = this.modalService.confirm({
      title: '您是否确认要删除这些数据么？',
      content: '',
      onOk() {
      },
      onCancel() {
      }
    })
    subscriptionedit.subscribe(result => {
      if (result === 'onOk'){
        this._isSpinning = true
        this.sslvpnService.deleteUser(id).then(data => {
          console.log(data)
          if (data.status_code === '0000') {
            this.nzNotificationService.create('success', '通知', '删除成功');
            this.reloadTable();
            this._isSpinning = false
          }
        })
      }
    })
  }
  deleteRows(){
    const subscriptionedit =  this.modalService.confirm({
      title: '您是否确认要删除这些数据么？',
      content: '',
      onOk() {
      },
      onCancel() {
      }
    })
    subscriptionedit.subscribe(result => {
      if (result === 'onOk') {
        const ids = []
        for (const item of this._dataSet) {
          if (item.checked === true) {
            ids.push(item.id)
          }
        }
        this.sslvpnService.deleteRows(ids).then(data => {
          if (data.status_code === '0000') {
            this.nzNotificationService.create('success', '通知', '删除成功');
            this.reloadTable();
          }
        })
      }
    })
  }
  showEditComponent(id){
    this.router.navigate(['/vpn/sslvpn/editUser', id]);
    // const subscriptionedit = this.modalService.open({
    //   title          : '编辑',
    //   content        : EditUserComponent,
    //   maskClosable   : false,
    //   footer         : false,
    //   componentParams: {
    //     id: id
    //   }
    // });
  }
  reloadTable(){
    this._isSpinning = true
    this.sslvpnService.getUsers(this.currentPage, this.pageSize).then(data => {
      if (data.status_code === '0000') {
        this._dataSet = data.data_ret.data;
        this.total = data.data_ret.total;
        this._isSpinning = false
      }
    });
  }
  showAddComponent() {
    this.router.navigateByUrl('/vpn/sslvpn/addUser')
    // const subscription = this.modalService.open({
    //   title          : '新建',
    //   content        : AddUserComponent,
    //   maskClosable   : false,
    //   footer         : false
    // });
    // subscription.subscribe(result => {
    //   if (result === 'onOk') {
    //     this.reloadTable();
    //   }
    // })
  }
  nzPageIndexChange(){
    this.reloadTable();
    this._allChecked = false
  }
  nzPageSizeChange(){
    this.currentPage = 1;
    this.reloadTable();
    this._allChecked = false
  }

  constructor(private modalService: NzModalService,
    private sslvpnService: SslvpnService, private nzNotificationService: NzNotificationService, private router: Router) { }
  ngOnInit() {
    this.reloadTable();
  }

}

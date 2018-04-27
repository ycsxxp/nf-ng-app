import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common'
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-interface-edit',
  templateUrl: './interface-edit.component.html',
  styleUrls: ['./interface-edit.component.scss']
})

export class InterfaceEditComponent implements OnInit {
  // 正在加载
  private _isSpinning: Boolean
  // id
  private interfaceId: Number
  // 默认表单值
  private interfaceItem = {
    id: 0,
    name: '',
    bindIntf: 'G1/1',
    type: 'gre',
    // zone: 'DMZ',
    ip4: '0.0.0.0/0',
    vlan: '0'
  }
  // 接口类型
  private interfaceTypeOptions = [
    { label: 'GRE', value: 'gre' },
    { label: 'VPN', value: 'vpn' },
    { label: '汇聚接口', value: 'aggregate' },
    { label: '回环接口', value: 'loopback' },
    { label: '三层子接口', value: 'layer3-sub' },
    { label: 'VLAN', value: 'vlan' },
    { label: 'IP隧道', value: 'iptunnel' },
    { label: 'BVI', value: 'bvi' }
  ]
  // 安全区
  private zoneOptions = [
    { label: 'DMZ', value: 'DMZ' },
    { label: 'Intranet', value: 'Intranet' },
    { label: 'Extranet', value: 'Extranet' }
  ]

  addInfterfaceForm: FormGroup
  // 表单是否有过修改 默认表单未修改过
  formControlIsDirty = false
  // 错误对应的提示
  validationMessages = {
    name: {
      required: '接口名不能为空',
      pattern: '接口名格式错误',
      duplicated: '名称已被占用',
      pending: '校验中...'
    },
    bindIntf: {
      required: '必选',
    },
    ip: {
      required: '必选',
      pattern: '格式错误'
    },
    vlan: {
      required: '必选',
      pattern: '格式错误'
    }
  }

  // 名称检查
  nameValidatorCheck = (control: FormControl): any => {
    // 自定义异步校验器 需要返回 Observable类型
    return Observable.timer(1000).switchMap(() => {
      // 对每个输入做校验
      if (control.dirty) {
        // 格式错误
        const NAME_REGEXP = /^[a-zA-Z0-9/]+$/i
        if (!NAME_REGEXP.test(control.value)) {
          return Observable.create(function (observer) {
            observer.next({ error: true, pattern: true })
            observer.complete()
          })
        }
        // 重名检查
        return this.interfaceService.checkSameName(control.value).then(res => {
          if (res.result) {
            return { error: true, duplicated: true }
          } else {
            return null
          }
        })
      } else {
        return Observable.create(function (observer) {
          observer.next(null)
          observer.complete()
        })
      }
    })
  }
  // 获取表单中某个控件 用于错误显示
  getFormControl(name) {
    return this.addInfterfaceForm.controls[name];
  }
  // 初始化表单
  private createForm() {
    // 表单校验相关
    this.addInfterfaceForm = this.fb.group({
      id: [this.interfaceItem.id],
      name: [this.interfaceItem.name, [Validators.required], [this.nameValidatorCheck] ],
      bindIntf: [this.interfaceItem.bindIntf, Validators.required],
      type: [this.interfaceItem.type],
      // zone: [this.interfaceItem.zone],
      ip4: [this.interfaceItem.ip4, Validators.required],
      vlan: [this.interfaceItem.vlan, Validators.required]
    })
  }
  // 表单提交
  private submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.addInfterfaceForm.controls) {
      const item = this.addInfterfaceForm.controls[key]
      // this.addInfterfaceForm.controls[key].markAsDirty();
      // 表单任一项有过输入并且判断值发生了变化 算作脏数据
      if (item.dirty && item.value !== this.interfaceItem[key]) {
        this.formControlIsDirty = true
      }
    }
    if (this.interfaceId) {
      // 编辑
      this.updateInterface(value)
    } else {
      // 新增
      this.addInterface(value)
    }
  }
  // 表单取消
  private cancle = ($event: MouseEvent) => {
    $event.preventDefault();
    // 返回接口列表
    this.location.back();
  }
  // 提交add API请求
  private addInterface(value) {
    this.interfaceService.addInterface(value).then(res => {
      // 成功之后跳转回接口列表
      this.location.back();
    })
  }
  // 更新update API请求
  private updateInterface(value) {
    this.interfaceService.updateInterface(value).then(res => {
      // 成功之后跳转回接口列表
      this.location.back();
    })
  }
  // 获取待编辑数据 API请求
  private getInterfaceItem() {
    // 获取路由传来的id
    this.activatedRoute.params.subscribe(item => this.interfaceId = item.id)
    if (this.interfaceId) {
      // 加载中
      this._isSpinning = true
      this.interfaceService.getInterfaceItem(this.interfaceId).then(res => {
        this.interfaceItem = res
        // 修改表单默认值
        this.addInfterfaceForm.setValue({
          id: this.interfaceItem.id,
          name: this.interfaceItem.name,
          bindIntf: this.interfaceItem.name,
          type: this.interfaceItem.type,
          // zone: this.interfaceItem.zone,
          ip4: this.interfaceItem.ip4,
          vlan: this.interfaceItem.vlan
        })
        // 加载完成
        this._isSpinning = false
      })
    }
  }
  constructor(
    @Inject('interface') private interfaceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // 创建表单
    this.createForm()
    // 获取当前待编辑数据
    this.getInterfaceItem()
  }
}

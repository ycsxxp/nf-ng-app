import { Component, OnInit } from '@angular/core';
import { NzModalSubject, NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SslvpnService } from '../../sslvpn.service';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-add-user-group',
  templateUrl: './add-user-group.component.html',
  styleUrls: ['./add-user-group.component.css']
})
export class AddUserGroupComponent implements OnInit {
  _isSpinning = false
  validateForm: FormGroup
  users = []
  selectedMultipleUsers = []
  _submitForm() {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      // console.log(this.validateForm.controls[ i ].status)
    }
    console.log(this.validateForm.status);
    if (this.validateForm.status === 'VALID') {
      this._isSpinning = true
      const ids = []
      for (const user of this.selectedMultipleUsers) {
        ids.push(user.value)
        console.log(user)
      }
      this.sslvpnService.addUserGroup(this.validateForm.value.name, this.validateForm.value.comment, ids)
        .then(data => {
          if (data.status_code === '0000') {
            this.nzNotificationService.create('success', '通知', '新建成功');
            this.router.navigate(['/vpn/sslvpn'], { queryParams: { 'index': 1 } });
            // this.subject.destroy('onOk');
          } else {
            this.validateForm.controls['name'].setErrors({ exist: true });
          }
          this._isSpinning = false
        })
    }

  }
  constructor(private fb: FormBuilder,
    private modalService: NzModalService, private router: Router,  private subject: NzModalSubject, private nzNotificationService: NzNotificationService, private sslvpnService: SslvpnService) { }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls['checkPassword'].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
  };
  validateFormName = (control: FormControl): { [s: string]: boolean } => {
    // return { exist: true};
    return {};
  };
  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required, this.validateFormName]],
      comment: [null, []],
    });
    this.sslvpnService.getUsers(1, 10000).then(data =>{
      for (const user of data.data_ret.data) {
        this.users.push({value: user.id, name: user.name})
      }
      console.log(this.users)
    })
  }
  getFormControl(name) {
    return this.validateForm.controls[name];
  }

}

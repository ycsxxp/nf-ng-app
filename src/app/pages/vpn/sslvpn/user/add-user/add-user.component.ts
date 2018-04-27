import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalSubject,NzNotificationService } from 'ng-zorro-antd';
import { SslvpnService } from '../../sslvpn.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  _isSpinning = false
  validateForm: FormGroup
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      // console.log(this.validateForm.controls[ i ].status)
    }
    console.log(this.validateForm.status);
    if (this.validateForm.status === 'VALID') {
      this._isSpinning = true
      this.sslvpnService.addUser(this.validateForm.value.name, this.validateForm.value.password)
      .then(data =>{
          if (data.status_code === '0000') {
            this.nzNotificationService.create('success', '通知', '新建成功');
            this.router.navigate(['/vpn/sslvpn'], { queryParams: { 'index': 0 }});
            // this.router.navigateByUrl('vpn/sslvpn')
            // this.subject.destroy('onOk');
          }else{
            this.validateForm.controls['name'].setErrors({exist: true});
          }
          this._isSpinning = false
      })
    }

  }
  returnParent() {
    this.router.navigateByUrl('vpn/sslvpn/user')
  }
  constructor(private fb: FormBuilder,
    private subject: NzModalSubject,
    private nzNotificationService:NzNotificationService,
    private router: Router,
    private sslvpnService:SslvpnService) { }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  };
  validateFormName = (control: FormControl): { [s: string]: boolean } => {
    // return { exist: true};
    return { };
  };
  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name             : [ null, [ Validators.required,this.validateFormName ] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ]
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

}

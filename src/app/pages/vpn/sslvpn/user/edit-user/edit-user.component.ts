import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NzModalSubject, NzNotificationService } from 'ng-zorro-antd';
import { SslvpnService } from '../../sslvpn.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  _isSpinning = false
  _id: string;
  data: any;
  validateForm: FormGroup;
  @Input()
  set id(value: string) {
    this._id = value;
  }
  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      // console.log(this.validateForm.controls[ i ].status)
    }
    console.log(this.validateForm.status);
    if (this.validateForm.status === 'VALID') {
      this._isSpinning = true
      this.sslvpnService.updateUser(this._id, this.validateForm.value.name, this.validateForm.value.password, this.validateForm.value.newpassword)
                        .then(data => {
                            if (data.status_code === '0000') {
                              this.nzNotificationService.create('success', '通知', '编辑成功');
                              this.router.navigate(['/vpn/sslvpn'], { queryParams: { 'index': 0 } });
                            }else{
                              if (data.data_ret.name !== undefined) {
                                this.validateForm.controls['name'].setErrors({exist: true});
                              }
                              if (data.data_ret.password !== undefined) {
                                this.validateForm.controls['password'].setErrors({error: true});
                              }
                            }
                            this._isSpinning = false
                        })
    }
  }
  constructor(private fb: FormBuilder, private subject: NzModalSubject,private nzNotificationService: NzNotificationService,
    private sslvpnService: SslvpnService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  updateConfirmValidator() {
    /** wait for refresh value */
    setTimeout(_ => {
      this.validateForm.controls[ 'checkPassword' ].updateValueAndValidity();
    });
  }
  updatePasswordConfirmValidator(){
    setTimeout(_ => {
      this.validateForm.controls['password'].updateValueAndValidity();
    });
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'newpassword' ].value) {
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
    this._id = this.activatedRoute.snapshot.params['id'];
    this.validateForm = this.fb.group({
      name             : [ null, [ Validators.required, this.validateFormName ] ],
      password         : [ null, [ Validators.required] ],
      newpassword         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ]
    });
    this.sslvpnService.getUserById(this._id).then(data => {
      this.data = data;
      this.validateForm.controls['name'].setValue(this.data.name);
    })
  }
  returnParent() {
    this.router.navigateByUrl('vpn/sslvpn/user')
  }
  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }
}

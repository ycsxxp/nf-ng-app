import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { NzDemoDatePickerStartEndComponent } from './datetimepicker.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [NzDemoDatePickerStartEndComponent],
  exports:[NzDemoDatePickerStartEndComponent]
})
export class DatetimepickerModule { }

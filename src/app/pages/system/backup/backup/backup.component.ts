import { Component, OnInit } from '@angular/core';
import { BackupService } from './backup.service';
@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {
  info = "全部备份文件:包含系统全部配置文件";
  typeOption = [
    { value: 1, label: '全部备份文件'},
    { value: 2, label: '引擎参数文件'},
    { value: 3, label: '系统运行状态文件'},
    { value: 4, label: '系统证书文件'},
    { value: 5, label: '系统调试文件'},
  ];
  selectedOption;
  constructor(private backupService: BackupService) {
    this.selectedOption = this.typeOption[0];
  }

  ngOnInit() {
  }
  nzSearchChange(event){
    alert(32);
  }
  download(){
    this.backupService.download(this.selectedOption.value).then(function(data) {});
  }
}

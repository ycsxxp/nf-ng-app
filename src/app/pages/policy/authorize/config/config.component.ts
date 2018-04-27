import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-policy-authorize-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public tableHeader = [
    { title: '域' },
    { title: '检查类型' },
    { title: '已经绑定数目' },
    { title: '操作' }
  ]

  public bind_types = [
    { value: '-1', label: '未配置' },
    { value: '0', label: 'IP' },
    { value: '1', label: 'MAC' },
    { value: '2', label: 'IP+MAC' }
  ]
  
  public _dataSet = [
    { domain: 'Default', bind_type: '-1', bind_count: '0', action: '编辑' }
  ]

  @ViewChild('nzSlider') private sliderDiv: ElementRef

  constructor() { 
    
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
// import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-top-traffic',
  templateUrl: './top-traffic.component.html',
  styleUrls: ['./top-traffic.component.css']
})
export class TopTrafficComponent implements OnInit {
  // option: EChartOption =  {
  //     tooltip : {
  //         trigger: 'axis'
  //     },
  //     xAxis : [
  //         {
  //             type : 'category',
  //             boundaryGap : false,
  //             data : ['周一','周二','周三','周四','周五','周六','周日']
  //         }
  //     ],
  //     yAxis : [
  //         {
  //             type : 'value'
  //         }
  //     ],
  //     series : [
  //         {
  //             name:'邮件营销',
  //             type:'line',
  //             stack: '总量',
  //             smooth:true,
  //             itemStyle: {normal: {areaStyle: {type: 'default'}}},
  //             data:[120, 132, 101, 134, 90, 230, 210]
  //         }
  //     ]
  // };
  constructor() { }

  ngOnInit() {
  }

}

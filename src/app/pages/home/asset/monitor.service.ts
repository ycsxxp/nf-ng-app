import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MonitorService {
  constructor(private http: Http) { }
  //API功能:获取下拉框的操作系统
  //参数:
  //返回值：eg:[
  //     { "value": "Windows 7", "label": "Windows 7"},
  //     { "value": "Windows 8/Windows 2012", "label": "Windows 8/Windows 2012"},
  //     { "value": "Windows 8.1/Windows 2012", "label": "Windows 8.1/Windows 2012"},
  //     { "value": "Windows Vista", "label": "Windows Vista"}
  // ]
  getOsOptionData(): Promise<any[]> {
    const itemUrl = 'staticjson/home/asset/osOptionData.json';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  //API功能:获取下拉框的操作系统
  //参数:
  //返回值：eg:[
  //     { "value": "Windows 7", "label": "Windows 7"},
  //     { "value": "Windows 8/Windows 2012", "label": "Windows 8/Windows 2012"},
  //     { "value": "Windows 8.1/Windows 2012", "label": "Windows 8.1/Windows 2012"},
  //     { "value": "Windows Vista", "label": "Windows Vista"}
  // ]
  getBrOptionData(): Promise<any[]> {
    const itemUrl = 'staticjson/home/asset/brOptionData.json';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  //API功能:获取下拉框的操作系统
  //参数:
  //返回值：eg:[
  //     { "value": "Windows 7", "label": "Windows 7"},
  //     { "value": "Windows 8/Windows 2012", "label": "Windows 8/Windows 2012"},
  //     { "value": "Windows 8.1/Windows 2012", "label": "Windows 8.1/Windows 2012"},
  //     { "value": "Windows Vista", "label": "Windows Vista"}
  // ]
  getAvOptionData(): Promise<any[]> {
    const itemUrl = 'staticjson/home/asset/avOptionData.json';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  //API功能:清除数据
  //参数:
  //返回值：
  clearData(): Promise<any[]> {
    const itemUrl = 'staticjson/home/asset/osOptionData.json';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  //API功能:查询数据
  //参数:ip,type,os
  //返回值：
  query(ip,type,os): Promise<any[]> {
    const itemUrl = 'staticjson/home/asset/assetList.json';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

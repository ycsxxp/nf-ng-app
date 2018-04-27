import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScmService {
  constructor(private http: Http) { }
  //API功能:查询数据
  //参数:
  //返回值：
  query(): Promise<any[]> {
    const itemUrl = 'staticjson/home/event/scm/scmList.json';
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

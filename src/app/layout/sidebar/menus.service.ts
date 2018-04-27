import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import 'rxjs/add/operator/toPromise';

// 定义菜单数组
export interface Menu {
  // 文本
  text: string
  // 图标
  icon?: string
  // 常用模块菜单的标记
  favorite?: boolean
  // 被添加为常用模块
  isFavorite?: boolean
  // 二级菜单
  child?: Menu[]
  // 链接 target
  target?: '_blank' | '_self' | '_parent' | '_top'
  // 是否打开
  _open?: boolean
  // 是否hover
  _hover?: boolean
}

@Injectable()
export class MenusService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getMenus(): Promise<any[]> {
    const menusUrl = 'http://localhost:3000/menus?id=0';  // URL to web api
    return this.http.get(menusUrl)
      .toPromise()
      .then(response => response[0].list)
      .catch(this.handleError);
  }

  // 更新菜单
  setMenus(menus): Promise<any[]> {
    const data = {
      id: 0,
      list: menus
    }
    const url = 'http://localhost:3000/menus/0'
    return this.http.put(url, data, { headers: this.headers })
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  // 从文件获取
  // getMenus(): Promise<any[]> {
  //   const menusUrl = 'staticjson/menus.json';  // URL to web api
  //   return this.http.get(menusUrl)
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

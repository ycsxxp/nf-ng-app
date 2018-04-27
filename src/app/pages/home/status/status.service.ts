import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatusService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  private menusUrl = 'staticjson/keylist.json';  // URL to web api

  constructor(private http: Http) { }

  getKeywordList(PageIndex = 1, pageSize = 10, sortField = '', sortOrder = ''): Promise<any[]> {
    const itemUrl = 'staticjson/keylist.json';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  deleteKeyword(id): Promise<any[]> {
    const deleteKyeUrl = '/object/deleteKeyword/id/'+id;
    return this.http.get(deleteKyeUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  addKeyData(obj): Promise<any[]> {
    const addKyeUrl = '/object/addKeyword';
    const body = "name=" + obj.name + "&key=" + obj.key ;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(addKyeUrl, body, {
                headers: headers
              }).toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  deleteKeywordRow(ids):Promise<any[]>{
    let body ="";
    for (var i = 0; i < ids.length; ++i) {
      if (body=="") {
        body ="ids[]="+ids[i];
      }else{
        body +="&ids[]="+ids[i];
      }
    }
    const deleteKyeUrl = '/object/deleteKeywords/';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(deleteKyeUrl, body, {
                headers: headers
              }).toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  getKeyById(id){
    // const getKeyByIdUrl = '/object/getKeyById/id/'+id;
    const getKeyByIdUrl = '/staticjson/keylistone.json';
    return this.http.get(getKeyByIdUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  updateKeyData(obj){
    const updateKyeUrl = '/object/updateKeyword/';
    const body ="id="+obj.id+"&name=" + obj.name + "&list=" + obj.key ;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(updateKyeUrl, body, {
                headers: headers
              }).toPromise()
                .then(response => response.json())
                .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

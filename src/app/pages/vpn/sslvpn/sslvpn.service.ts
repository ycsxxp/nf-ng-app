import { Injectable } from '@angular/core';
// import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SslvpnService {
  // private baseUrl = ';
  // private baseUrl = 'http://10.66.94.1';
  private baseUrl = 'https://10.245.41.224';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  // constructor(private http: Http) { }
constructor(private http: HttpClient) { }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // 用户相关
  getUsers(currentPage, pageSize): Promise<any> {
    const itemUrl = this.baseUrl + '/api/sslvpn/getUsers/' + currentPage + '/' + pageSize + '/';
    return this.http.get(itemUrl)
                .toPromise()
                .then(response => response)
                .catch(this.handleError);
  }
  getUserById(id): Promise<any> {
    const itemUrl = this.baseUrl + '/api/sslvpn/detailsUser/';
    return this.http.get(itemUrl + id)
                .toPromise()
                .then(response => response)
                .catch(this.handleError);
  }
  addUser(name,password): Promise<any> {
    const data = {
              'name': name,
              'password':password,
          };
    return this.http.post(this.baseUrl + '/api/sslvpn/addUser', data)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  updateUser(id,name,password,newpassword): Promise<any> {
    const data = {
              'id': id,
              'name': name,
              'password': password,
              'newpassword': newpassword
          };
    const itemUrl = this.baseUrl + '/api/sslvpn/detailsUser/'+id+'/';
    return this.http.put(itemUrl,
          data)
          .toPromise().then(response => response).catch(this.handleError);
  }
  deleteUser(id): Promise<any> {
     return this.http.delete(this.baseUrl + '/api/sslvpn/deleteUser/' + id + '/')
          .toPromise().then(response => response).catch(this.handleError);
  }
  deleteRows(ids): Promise<any> {
     const data = {
              'ids': ids,
          };
     return this.http.post(this.baseUrl + '/api/sslvpn/deleteUsers',
          data)
          .toPromise().then(response => response).catch(this.handleError);
  }

  // 用户组相关
  getUserGroups(currentPage, pageSize): Promise<any> {
    const itemUrl = this.baseUrl + '/api/sslvpn/getUserGroups/' + currentPage + '/' + pageSize + '/';
    return this.http.get(itemUrl)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }
  getUserGroupById(id): Promise<any> {
    const itemUrl = this.baseUrl + '/api/sslvpn/detailsUser/';
    return this.http.get(itemUrl + id)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }
  addUserGroup(name, comment, ids): Promise<any> {
    const data = {
      'name': name,
      'comment': comment,
      'ids': ids,
    };
    return this.http.post(this.baseUrl + '/api/sslvpn/addUserGroup',
      data)
      .toPromise().then(response => response).catch(this.handleError);
  }
  updateUserGroup(id, name, password, newpassword): Promise<any> {
    const data = {
      'id': id,
      'name': name,
      'password': password,
      'newpassword': newpassword
    };
    const itemUrl = this.baseUrl + '/api/sslvpn/detailsUser/' + id + '/';
    return this.http.put(itemUrl,
      data)
      .toPromise().then(response => response).catch(this.handleError);
  }
  deleteUserGroup(id): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/sslvpn/deleteUser/' + id + '/')
      .toPromise().then(response => response).catch(this.handleError);
  }
  deleteUserGroupRows(ids): Promise<any> {
    const data = {
      'ids': ids,
    };
    return this.http.post(this.baseUrl + '/api/sslvpn/deleteUsers',
      data)
      .toPromise().then(response => response).catch(this.handleError);
  }
}

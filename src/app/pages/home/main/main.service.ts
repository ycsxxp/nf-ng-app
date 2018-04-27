import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable()
export class MainService {

  // private headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getWidgetPosArr(): Promise<any[]> {
    // const dashboardUrl = 'https://10.66.94.1/api/test/getData/';  // URL to web api
    const dashboardUrl = 'http://localhost:3000/widget?id=0';  // URL to web api
    return this.http.get(dashboardUrl)
      .toPromise()
      .then(response => response[0].list)
      .catch(this.handleError);
  }

  setWidgetPosArr(widgetPosArr): Promise<any[]> {
    const data = {
      id: 0,
      list: widgetPosArr
    }
    // const url = 'https://10.66.94.1/api/test/setData/'
    const url = 'http://localhost:3000/widget/0'
    return this.http.put(url, data, {headers: this.headers})
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

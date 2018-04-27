import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class InterfaceService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getInterfaceList() {
    // mockapi
    // const url = 'http://localhost:3000/interface'

    // product
    const url = 'https://10.245.41.224/api/interface/getInterfaces/'

    return this.http.get(url)
  }
  // Promise
  getInterfaceItem(id): Promise<any> {
    const url = 'http://localhost:3000/interface/' + id
    return this.http.get(url)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  // Observable
  // getInterfaceItem(id): Observable<any[]> {
  //   const url = 'http://localhost:3000/interface/' + id
  //   return this.http.get(url)
  //     .map(response => response.json())
  // }
  // 新增接口
  addInterface(data): Promise<any[]> {
    const url = 'http://localhost:3000/interface'
    return this.http.post(url, data)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  // 更新接口
  updateInterface(data): Promise<any[]> {
    const id = data.id
    const url = 'http://localhost:3000/interface/' + id
    return this.http.put(url, data)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  // 删除接口
  deleteInterface(id): Promise<any[]> {
    const url = 'http://localhost:3000/interface/' + id
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(response)
      })
      .catch(this.handleError)
  }
  // 名称检查重复
  checkSameName(data): Promise<any[]> {
    const url = 'http://localhost:3000/checkSameName/'
    return this.http.get(url)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

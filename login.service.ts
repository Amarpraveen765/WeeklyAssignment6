import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }



  getUserValidation(): Observable<any> {
    console.log("hi guys")

    return this.http.get(`${this.baseUrl}` + 'getdata');  //will change ...As Per ordermanagement

  }
  // below this all the API's will br there
  // we cane have the multiple connect 
  createData(Data: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'adddata', Data);

  }


  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deletedata/${id}`, { responseType: 'text' });

  }


  getData(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/getdata/${id}`);

  }


  updateData(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/updatedata/${id}`, value);

  }
}

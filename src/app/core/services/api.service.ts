import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams, HttpEvent} from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept : 'application/json',
    observe: 'response'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  get(path: string, params: HttpParams= new HttpParams(), headers: HttpHeaders= new HttpHeaders()): Observable<any>{
    return this.httpClient.get(this.baseUrl + path, {params: params, headers: headers, withCredentials: true});
  }

  post(path: string, body: Object = {}, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    let tempHeaders: HttpHeaders = new HttpHeaders();
    if (headers.keys().length > 0) {
      headers.keys().forEach((v) => {
        tempHeaders = tempHeaders.append(v, headers.get(v));
      });
    }
    httpOptions.headers.keys().forEach((v) => {
      tempHeaders = tempHeaders.append(v, httpOptions.headers.get(v));
    });
    return this.httpClient.post<any>(this.baseUrl + path, JSON.stringify(body),
      { headers: tempHeaders, params }).pipe(map(data => data));
  }

  postFile(path: string, formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl + path, formData, { reportProgress: true, observe: 'events', responseType: 'blob' });
  }

  patch(path: string, body: Object = {}, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    let tempHeaders: HttpHeaders = new HttpHeaders();
    if (headers.keys().length > 0) {
      headers.keys().forEach((v) => {
        tempHeaders = tempHeaders.append(v, headers.get(v));
      });
    }
    httpOptions.headers.keys().forEach((v) => {
      tempHeaders = tempHeaders.append(v, httpOptions.headers.get(v));
    });
    return this.httpClient.patch(this.baseUrl + path, JSON.stringify(body), { headers: tempHeaders, params }).pipe(map(data => data));
  }

  put(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.put(this.baseUrl + path, body, { params });
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return this.httpClient.delete(this.baseUrl + path, { headers: headers, params }).pipe();
  }
  downloadFileUsingGet(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()) {
    return this.httpClient.get(this.baseUrl + path, { responseType: 'blob', headers: headers, params });
  }
}

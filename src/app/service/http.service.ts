import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  uploadfile(data): Observable<any> {
    console.log(data);
    
    return this.httpClient.post("url", data);
  }
}

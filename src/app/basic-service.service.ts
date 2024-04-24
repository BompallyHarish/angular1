import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {
  public url = "http://localhost:8080/api/v1.0/users/signUp"
  constructor(private http: HttpClient) { }
  enroll(data: any) {
    return this.http.post(this.url, data)
  }
}

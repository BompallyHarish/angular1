import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicServiceService {
  public sigUpUrl = "http://localhost:8080/api/v1.0/users/signUp"
  public userDetails = "http://localhost:8080/api/v1.0/users/testUser"
  constructor(private http: HttpClient) { }
  enroll(data: any) {
    return this.http.post(this.sigUpUrl, data)
  }
  getDetails() {
    return this.http.get(this.userDetails)
      // .pipe(catchError(this.errorHandler))
  }
  // errorHandler(error: HttpErrorResponse) {
  //   return throwError(error)
  // }
}

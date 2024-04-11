import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  // getEmployees() {
  //   return [
  //     { name: "Harish", value: 0 },
  //     { name: "Vrinda", value: 1 },
  //     { name: "Adwaith", value: 2 },
  //     { name: "Yasshna", value: 3 },
  //     {name:"Ravali", value:4}
  //   ]
  // }


  getStatesOfUS() {
    return this.http.get('http://localhost:8080/api/v1.0/stateTax/getStatesOfUS')
  }
}

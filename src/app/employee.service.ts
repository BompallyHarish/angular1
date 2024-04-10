import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees() {
    return [
      { name: "Harish", value: 0 },
      { name: "Vrinda", value: 1 },
      { name: "Adwaith", value: 2 },
      { name: "Yasshna", value: 3 }
    ]
  }
}

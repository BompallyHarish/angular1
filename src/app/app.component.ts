import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  // class binding
  public successClass = "text-special"
  public hasError = true
  public messageclass: any = {
    "text-special": false,
    "text-danger": this.hasError,
    "text-success": !this.hasError
  }
  // style Binding
  public groupStyles = {
    color: 'blue',
    fontStyle: 'calibiri'
  }

  //  Event binding
  public greet = ""
  onClick(event: any) {
    console.log(event)
    this.greet = "Cliked on to the button"
  }

  // template reference variable
  public loggedInput = ""
  loggToconsole(value: any) {
    console.log(value.value)
    this.loggedInput = value.value
  }

  // ngIf statements
  public value = true

  public colour = "Pink"

  public arrays1 = ["Vrinda", "sangeetha", "Harish", "Raji"]

  // component Interaction
  public name = "Harish111"

  // output interaction
  public message: any = " "
  receiveMessage(message: any) {
    console.log('Testgvbhnjm')
    this.message = message;
    console.log(message)
  }
  public date = new Date()

  // services

  public data: any = [];
  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.data = this.employeeService.getEmployees()
  }
}

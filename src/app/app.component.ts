import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Signup } from './signup';
import { FormsModule } from '@angular/forms';
import { BasicServiceService } from './basic-service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, TestComponent, FormsModule],
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

  public value1: any = 10
  constructor(private employeeService: EmployeeService, private basicServiceService: BasicServiceService) {

  }
  ngOnInit() {
    this.getUserData()
  }
  // ngOnInit() {
  //   this.statesData()
  //   // this.employeeService.getStatesOfUS().subscribe((res: any) => {

  // }
  // statesData() {
  //   this.employeeService.getStatesOfUS().subscribe(async (res: any) => {
  //     // console.log(res)
  //     this.data = res
  //   },
  //     (error: any) => {
  //       console.log('error ', error)
  //     }
  //   )
  // }

  public signUpModel = new Signup("", "", "", "")
  public errorMessage: string = ''
  getUserData() {
    // console.log('true1')
    this.basicServiceService.getDetails().subscribe(async (res: any) => {
      // console.log(res)
      this.signUpModel = res.data
    },
      (error: any) => {
        console.log(error.statusText)
        this.errorMessage = error.statusText
      })
  }
  onSignup() {
    this.basicServiceService.enroll(this.signUpModel).subscribe(async (res: any) => {
      console.log(res)
      this.signUpModel = new Signup("", "", "", "")
    },
      (error: any) => {
        console.log(error)
      })
  }
}

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
const routes:Routes=[
{path: 'employees', component: EmployeeListComponent},
{path:'departments', component: DepartmentListComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, DepartmentListComponent]

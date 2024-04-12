import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { RouterModule } from '@angular/router';

const routes:Routes=[
{path: 'employees', Component: EmployeeListComponent},
{path:'departments', Component: DepartmentListComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export const routingComponents = {EmployeeListComponent, DepartmentListComponent}

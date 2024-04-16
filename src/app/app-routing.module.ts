import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
const routes:Routes=[
{path: 'employees', component: EmployeeListComponent},
{path:'departments', component: DepartmentListComponent},
{path:'departments/:id', component:DepartmentdetailsComponent},
{path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, DepartmentListComponent,PageNotFoundComponent]

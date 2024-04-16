import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';


export const routes: Routes = [
    {path:'',redirectTo:'/employees', pathMatch: 'full'},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments', component: DepartmentListComponent},
    {path:'departments/:id', component:DepartmentdetailsComponent},
    {path:'**', component: PageNotFoundComponent}
];

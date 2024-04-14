import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';


export const routes: Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: 'departments', component: DepartmentListComponent},
];

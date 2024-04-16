import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  public departmentList = [
    {id:1, name: 'Node Js'},
    {id:2, name: 'Angular'},
    {id:3, name: 'react Js'},
    {id:4, name: 'Blockchain'},
  ]
  constructor(private router: Router){}
  ngOnInit(){}
  onSelect(department:any){
    this.router.navigate(['/departments', department.id])
  }
}

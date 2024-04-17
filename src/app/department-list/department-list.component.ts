import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css' 
})
export class DepartmentListComponent {
  public selectedId:any
  public departmentList = [
    { id: 1, name: 'Node Js' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'react Js' },
    { id: 4, name: 'Blockchain' },
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() { 
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id')
      this.selectedId = id
    })
  }
  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id])
    this.router.navigate([department.id],{relativeTo: this.route})
  }
  isSelected(department:any){
    // console.log(department.id)
    // console.log(this.selectedId)
    // console.log('valueCheck ', parseInt(department.id) === parseInt(this.selectedId))
    return parseInt(department.id) === parseInt(this.selectedId)
  }
}

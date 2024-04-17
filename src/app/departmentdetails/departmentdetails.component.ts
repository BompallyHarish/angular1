import { Component } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-departmentdetails',
  standalone: true,
  imports: [],
  templateUrl: './departmentdetails.component.html',
  styleUrl: './departmentdetails.component.css'
}) 
export class DepartmentdetailsComponent {
  public departmentId: any
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    // let id = (this.route.snapshot.paramMap.get('id'))
    // this.departmentId = id
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = params.get('id')
      this.departmentId = id
    })
  }
  goToNext() {
    let id = parseInt(this.departmentId) +1
    // this.departmentId = id
    this.router.navigate(['departments', id])
  }
  goToPrevious() {
    let id = parseInt(this.departmentId) -1
    // this.departmentId = id
    this.router.navigate(['departments', id])
  }
}

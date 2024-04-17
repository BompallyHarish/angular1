import { Component } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-departmentdetails',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,],
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
    // this.router.navigate(['departments', id])
    this.router.navigate(['../',id],{relativeTo: this.route})
  }
  goToPrevious() {
    let id = parseInt(this.departmentId) -1
    // this.departmentId = id
    // this.router.navigate(['departments', id])
    this.router.navigate(['../',id],{relativeTo: this.route})
  }
  goToDepartments(){
    let selectedId = this.departmentId
    // this.router.navigate(['departments', {id:selectedId}])
    this.router.navigate(['../',{id:selectedId}],{relativeTo: this.route})
  }
  goToOverView(){
    this.router.navigate(['overview'], {relativeTo:this.route})

  }
  goToContact(){
    this.router.navigate(['contact'], {relativeTo:this.route})
  }
}

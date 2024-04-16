import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departmentdetails',
  standalone: true,
  imports: [],
  templateUrl: './departmentdetails.component.html',
  styleUrl: './departmentdetails.component.css'
})
export class DepartmentdetailsComponent {
  public departmentId: any
constructor(private route: ActivatedRoute){}
ngOnInit(){
  let id = (this.route.snapshot.paramMap.get('id'))
this.departmentId = id
}
}

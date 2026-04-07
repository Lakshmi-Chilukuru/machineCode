import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.less']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employeeData:any;
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.employeeData)
    // let name = this.activatedRoute.snapshot.paramMap.get('name')
    // console.log(name)
  }
}

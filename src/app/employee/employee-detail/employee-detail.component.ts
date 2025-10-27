import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.less']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employeeData:any;
  constructor(){}
  ngOnInit(): void {
    console.log(this.employeeData)
  }
}

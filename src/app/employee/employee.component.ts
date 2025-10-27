import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent {
  emp: any;

  receiveEmployee(data:any){
    console.log(data)
    this.emp = data;
  }
}

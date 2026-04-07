import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../employees';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.less']
})
export class AllEmployeesComponent implements OnInit{
  public employees:any;
  @Output() employee =new EventEmitter<any>()
  constructor(private router:Router){}

  ngOnInit(): void {
    this.employees = EmployeeData  
  }
  getEmployee(emp:Employee){
    this.employee.emit(emp);
    this.router.navigate(['/emp',emp.name])
  }
}

import { Component, OnInit } from '@angular/core';
import { MainService } from './service/main.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'machineCode';
  loggedIn = false
  constructor(private service:MainService){
   this.service.loggedIn$.subscribe(val=>{
    this.loggedIn = val
   })
  }
  ngOnInit(): void {
  }
}

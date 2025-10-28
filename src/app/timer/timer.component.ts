import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit{
  public hoursTimer:number=8;
  public minsTimer:any
  public secondsTimer :any;

  constructor(){
    
  }
  ngOnInit(): void {
    this.hoursTimer =0;
    this.minsTimer= 0;
    this.secondsTimer = 0
  }
  startTime(hoursTimer:number,minsTimer:string,secondsTimer:string){
    this.hoursTimer = +hoursTimer;
    this.minsTimer= +minsTimer;
    this.secondsTimer =  +secondsTimer
    if(this.minsTimer >= 0){
      this.minsTimer =this.minsTimer -1;
      this.secondsTimer =59
      if(this.secondsTimer<=0){
        this.secondsTimer=0
      }
      this.minsRun(this.minsTimer)
    }
    if(this.secondsTimer){
      setInterval(()=>{
        this.secondsTimer =this.secondsTimer-10
      },1000)
    }
    
    
  }
  minsRun(mins:number){
    setInterval(()=>{
      this.minsTimer--
    },60000)
       
  }
  

  
  resetTime(){
    this.hoursTimer = 0;
    this.minsTimer = 0;
    this.secondsTimer = 0;
  }
}

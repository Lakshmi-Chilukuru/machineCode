import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit{
  public hoursTimer:any;
  public minsTimer:any
  public secondsTimer :any;
  flag:boolean =false;
  countDownTimer:any;
  btnName:string ="Start";
  constructor(){
    
  }
  ngOnInit(): void {
    this.hoursTimer ='00';
    this.minsTimer='00';
    this.secondsTimer = '00'
  }
  startTime(hoursTimer:number,minsTimer:string,secondsTimer:string){
    this.hoursTimer = hoursTimer;
    this.minsTimer = +minsTimer;
    this.secondsTimer = +secondsTimer;
    
    if(this.hoursTimer == 0 && this.minsTimer ==0 && this.secondsTimer == 0){
      return
      
    }
    this.action()
    
  }
  action(){
    this.countDownTimer = setInterval(()=>{
        this.timer()
      },1000)
  }

  timer(){
    if(this.hoursTimer == 0 && this.minsTimer ==0 && this.secondsTimer == 0){
      this.hoursTimer = 0;
      this.minsTimer = 0;
      this.secondsTimer = 0
    }else if(this.secondsTimer!=0){
      this.flag= true
      this.secondsTimer =`${this.secondsTimer<=10?"0":""}${this.secondsTimer-1}`
    }
    else if(this.minsTimer !=0 && this.secondsTimer==0){
      this.flag= true
      this.secondsTimer =59
      this.minsTimer =`${this.minsTimer<=10?"0":""}${this.minsTimer-1}`
    }
    else if(this.hoursTimer !=0 && this.secondsTimer ==0 && this.minsTimer ==0){
      this.flag= true
      this.minsTimer=59;
      this.secondsTimer=59;
      this.hoursTimer =`${this.hoursTimer<=10?"0":""}${this.hoursTimer-1}`
    }
    
  }

  stopInterval(state:any){
    if(state == "pause"){
      this.btnName='continue';
      clearInterval(this.countDownTimer)
    }
    else if(this.btnName = "Continue"){
      this.timer()
    }
    
  }
  
  resetTime(){
    this.hoursTimer = '00';
    this.minsTimer = '00';
    this.secondsTimer = '00';
    this.btnName = "Start"
  }
}

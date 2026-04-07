import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prime } from '../app.prime';



@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.less']
})
export class ResolverComponent implements OnInit{
  public user:any;
  public tasks :{name:string,selected:boolean}[]=[
    {name:'Primary', selected:false},
    {name:'Secondary', selected:false},
    {name: 'Tertiary',selected:false}
  ]
  public today = new Date()
  public allSelected:boolean = false
  myFilter =(date:Date | null):boolean=>{
    const today = new Date().getDay();
    let nowdate;
    if(date){
      nowdate = date?.getDay();
    }
    if(nowdate){
      return nowdate<= today
    }
    return false;
  }
  disabledDates = [
  new Date(2026, 2, 10),
  new Date(2026, 2, 15),
  new Date(2026, 2, 20)
];

  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
    this.user = this.router.snapshot.data['user'];
    console.log(this.user)
  }
  onscroll(value:any){
    console.log(value)
  }
  normalThread(){
    let prime = Prime.findNthPrimeNumer(1000);
    console.log(prime);
  }
  checkNumberPrimeUSingWroker(){
    if(typeof Worker !== undefined){
      const worker = new Worker(new URL('./testing.worker',import.meta.url))
      worker.onmessage = ({data})=>{
        console.log(`data from worker : ${data}`)
      };
      worker.onerror = ()=>{
        console.log("error")
      }
      worker.postMessage(500)
    
    }
  }
  click(){
    console.log("clciked")
  }
  someTrue(){
    if(this.tasks.length === 0){
      return;
    }
    return this.tasks.filter(t=>t.selected).length>0 && !this.allSelected
  }
  setAll(){
    
  }
  disableDate =(date:Date | null)=>{
    let datf = new Date().toISOString().split('T');
    let dateArr:any= [];
    let dateObj ;
    if(!dateArr.includes(datf)){
      dateArr.push(datf,4)
    }
    console.log(dateArr)
    if(!date) return false;
    return !this.disabledDates.some(d=>
      d.getDate() == date.getDate() && d.getMonth() == date.getMonth() && d.getFullYear() == date.getFullYear()
    )
  }
  
}

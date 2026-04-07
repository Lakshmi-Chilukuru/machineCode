import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, filter,map, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public appForm=new BehaviorSubject<any>({});
  public appArr:any =[];
  public data$ = this.appForm.asObservable()
  public loggedIn$ = new BehaviorSubject<boolean>(false);
  private loginUrl!:string
  public loader$= new BehaviorSubject<boolean>(false);
  public loaderObservable = this.loader$.asObservable()
  constructor(private router:Router,private http:HttpClient) { }
  getAppFormDetails(form:FormGroup){
    this.appArr.push(form.value)
    this.appForm.next(this.appArr.slice())
  }

  show(){
    console.log("SHOW")
    this.loader$.next(true)
  }
  hide(){
    console.log("HIDE")
    this.loader$.next(false)
  }
  getAppindex(index:number){
      return this.data$.pipe(
    map(items =>{
      if(Array.isArray(items) && items.length<=0){
        this.router.navigate(['/formData'])
        return
      }else if(Object.values(items).length<=0){
        this.router.navigate(['/formData'])
        return
      }
      else{
        return items.filter((item:any) => item.index === index)
      }
    })
    )
  }
  getUrls(){
    this.loginUrl = 'https://freeapi.miniprojectideas.com/api/User/Login'
    return this.loginUrl
  }
  // "emailId": "string212@gmail.com",
  // "altMobileNo": "string",
  // "password": "string32123"
  login(req:any){
    this.loggedIn$.next(true);
    sessionStorage.setItem('token','dummytoken')
    sessionStorage.setItem('loggedIn',"true")
    return this.http.post<any>(this.getUrls(),req).pipe(map(response=>response))
  }
  isAuthenticated():boolean {
    return !!sessionStorage.getItem('token');
  }
  getData():Observable<any>{
    return of('lafewgwe','gewgewgw')
  }
  approveLoan(id: number) {
    return this.http.post(`/loans/${id}/approve`, {});
  }

  rejectLoan(id: number) {
    return this.http.post(`/loans/${id}/reject`, {});
  }
// 'id', 'name', 'email', 'body'
  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(
      map((data:any)=>data.map((res:any)=>({
        id:res.id,
        name:res.name,
        email:res.email,
        body:res.body
      }))),
      shareReplay({
          bufferSize: 1,
          refCount: true
        }))
  }
}

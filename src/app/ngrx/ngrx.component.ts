import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, map, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import {data} from './data'
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.less']
})
export class NgrxComponent implements OnInit{
  constructor(private http:HttpClient){
    this.searchText.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(data=>console.log(data)),
      mergeMap((data:any)=>{
        if(!data) return of([])
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${data}`).pipe(
          catchError((err)=>{
            return of([])
          })
        )
      }
    )).subscribe(res=>console.log(res))

    this.text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(data=>console.log(data)),
      switchMap((data:any)=>{
        if(!data) return of([])
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${data}`).pipe(
          catchError((err)=>{
            return of([])
          })
        )
      }
    )).subscribe(res=>console.log(res))

  }
  public loading :boolean = false
  public userData$!:Observable<any>;
  public userDataSubject$ = new BehaviorSubject<[]>([])
  public data:any[] = data;
  public datr:any[] =[];
  public infiniteScrollUrl = "https://jsonplaceholder.typicode.com/comments";
  searchTextTf ="";
  public text$ = new BehaviorSubject<string>("")
  public comments$ !:Observable<any[]>;
  searchText = new FormControl('')
   itemSize = 80;
  ngOnInit(): void {
    this.userData()
    this.commentsData();
  }
  userData(){
    this.userData$ = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((data)=>console.log(data)),
      map((res:any)=>res.map((data:any)=>({id:data.id,name:data.name,userName:data.username,mail:data.email,phone:data.phone,website:data.website})))
    )
  }
  commentsData(){
    this.comments$ = this.http.get(this.infiniteScrollUrl).pipe(
      tap((data)=>console.log(data)),
      map((response:any)=>response.map((data:any)=>({
        postId:data.postId,
        name:data.name,
        id:data.id
      })))
    )
  }
  // drop(event: CdkDragDrop<string[]>){
  //   moveItemInArray(this.movies$, event.previousIndex, event.currentIndex);

  // }
  ondebounce(event:any){
    this.text$.next(event.target.value)
  }
  editData(user:any){
    user.isEdit = true
  }
  deleteUser(user:unknown){

  }
  add(){
    const user = {
      id:1,
      name:"",
      userName:"",
      mail:"",
      phone:"",
      website:""
    }
    this.userData
  }


}

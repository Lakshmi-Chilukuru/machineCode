import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, map, Observable, of, shareReplay, switchMap, throwError } from 'rxjs';

@Injectable()
export class ASyncService {

  constructor(private http:HttpClient) { }
  public APIDetail = 'https://shopitem-bcc1b-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
  private firstApi$ = this.http.get<any>(this.APIDetail).pipe(map((res)=>Object.values(res).flat()),shareReplay(1))
  private randomData$ = of(1,2,3)
  
  getAllData():Observable<any>{
    return this.firstApi$;
  }
  getRandData():Observable<any>{
    return this.randomData$.pipe(switchMap(x=> `x/{z}`))
  }
  public data= ["lakshmi","narayana"]
  getname():Observable<any>{
    return of(this.data)
  }
}

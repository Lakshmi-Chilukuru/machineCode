import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ASyncService } from './service/a-sync.service';
import { FormControl } from '@angular/forms';
import { concatMap, debounce, debounceTime, distinctUntilChanged, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.less']
})
export class AsyncComponent implements OnInit,AfterViewInit{
  callApi: any;
  searchInput=new FormControl('')
  allData: any;

  constructor(private async:ASyncService){
    
  }
  ngOnInit(): void {
    this.allData =this.async.getAllData();
    this.async.getRandData().pipe(
      switchMap(x=> of(x))
    ).subscribe(val=>console.log(val))

  }
  ngAfterViewInit(): void {
    const data =this.searchInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(x=>of(`x/${x}`),
    )
  ).subscribe(val=>console.log(val, 'after 500ms'))
    // console.log(data)
  }
  tackById(data:any,id:number){
    console.log(data)
  }
}

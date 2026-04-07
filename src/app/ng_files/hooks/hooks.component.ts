import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.less']
})
export class HooksComponent implements OnChanges, OnInit,OnDestroy, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges",changes)
  }
  ngOnInit(): void {
    console.log("instantiated")
  }
  ngDoCheck(): void {
    console.log("checked")
  }
  ngAfterContentInit(): void {
    console.log("content projected")
  }
  ngAfterContentChecked(): void {
    console.log("content checked")
  }
  ngAfterViewInit(): void {
    console.log("view shows")
  }
  ngAfterViewChecked(): void {
    console.log("view checked")
  }
  
  ngOnDestroy(): void {
    console.log("component destroyed")
  }
}

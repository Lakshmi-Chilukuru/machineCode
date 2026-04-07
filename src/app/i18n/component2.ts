import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { add } from "./ngrx.actions";

@Component({
  selector: 'app-cp2',
  template:`<p>Current Count : {{count$ | async}}</p>
    <button (click)="increaseCount()">Increase</button>
    <button (click)="detect()">Detect</button>
    <button (click)="detach()">Detach</button>
    <button (click)="reattach()">Reattach</button>
    <button (click)="mark()">markCheck</button>
  `,
  standalone:true,
  imports:[AsyncPipe],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class cP2{
    public count$!:Observable<number>
    constructor(private store:Store<{count:number}>,private cd:ChangeDetectorRef){
        this.count$ = this.store.pipe(select('count'))
    }
     increaseCount(){
        this.store.dispatch(add())
      }

    detect(){
        this.cd.detectChanges();
    }
    detach(){
        this.cd.detach()
    }
    reattach(){
        this.cd.reattach()
    }
    mark(){
        this.cd.markForCheck()
    }
}
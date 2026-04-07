import { Component } from '@angular/core';
import { ASyncService } from '../async/service/a-sync.service';

@Component({
  selector: 'app-async2',
  templateUrl: './async2.component.html',
  styleUrls: ['./async2.component.less']
})
export class Async2Component {
  callApi: any;
  constructor(private async:ASyncService){
  }
  ngOnInit(): void {
    this.async.getAllData().subscribe((res)=>{
      console.log(res)
    })
  }
}

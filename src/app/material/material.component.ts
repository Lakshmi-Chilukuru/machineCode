import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Commenti } from './data';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less']
})

export class MaterialComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'body'];
  dataSource = new MatTableDataSource<Commenti>();
  private service= inject(MainService)
  public loader$ = this.service.loader$.asObservable()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  finalData: Commenti[] =[];

  ngOnInit(): void {
    this.service.getComments().subscribe((res:any)=>{
      this.dataSource.data = res
      this.finalData = [...this.dataSource.data]
    })
    setTimeout(() => {
  this.service.hide();
}, 10000);
  }
  checkCommentData(event:any){
    this.dataSource.data = this.finalData.filter((info:any)=>{
      return info.email.toLowerCase().includes(event.target.value.toLowerCase())
    })
    
    console.log(event.target.value)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


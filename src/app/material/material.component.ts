import { AfterViewInit, Component, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import { Commenti } from './data';
import { MainService } from '../service/main.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less']
})

export class MaterialComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'body'];
  dataSource = new MatTableDataSource<Commenti>();
  private service= inject(MainService)
  public loader$ = this.service.loader$.asObservable();
  public showLoader:boolean= false; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('container' ,{read:ViewContainerRef}) container!:ViewContainerRef;
  finalData: Commenti[] =[];

  ngOnInit(): void {
    this.service.getComments().subscribe((res:any)=>{
      this.dataSource.data = res
      this.finalData = [...this.dataSource.data]
    })
    
  }


  loader(){
        this.container.clear()

    this.container.createComponent(LoaderComponent)
  }
  checkCommentData(event:any){
    this.dataSource.data = this.finalData.filter((info:any)=>{
      return info.email.toLowerCase().includes(event.target.value.toLowerCase())
    })
    
    console.log(event.target.value)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.loader$.subscribe((res)=>{
      this.showLoader = res;
      if(this.showLoader){
        this.loader()
      }
      else{
        this.container.clear()
      }
    })
  }
}


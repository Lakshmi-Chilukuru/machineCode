import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.less']
})
export class FormDataComponent implements OnInit{
  public id!:number;
  formData!: any;
  dataMsg !:string
  constructor(private router:ActivatedRoute,private ms:MainService){
    this.id =Number(this.router.snapshot.paramMap.get('id'))
    console.log(this.id)
  }
  ngOnInit(): void {
    if((this.id != null || this.id != undefined) && this.id != 0 ){
      this.getAppindexData()
    }
    else{
      this.dataMsg = "Please Check whether the data is present in the respective Route and ComeBack again"
    }
  }
  getAppindexData(){
    this.ms.getAppindex(this.id).subscribe((data:any)=>{
      this.formData = data
  })
    if(!this.formData){
      this.dataMsg ="noData"
    }else{
      console.log(this.formData)
    }
  }
}

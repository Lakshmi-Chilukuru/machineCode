import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { states,State,District, districts } from './dropdownData';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})
export class FileUploadComponent {
  constructor(private http:HttpClient){}
  source:string =""
  images:string[]=[]
  public states :State[] = states
  public districts:District[]=[] =districts
  public filteredDistricts:any=[]
    uploadFile(event:any){
      // if(!event.target.files[0].type.includes("jpeg") || !event.target.files[0].type.includes("jpg") || !event.target.files[0].type.includes("png")) return
      console.log(event.target.files[0])
      this.projectImage(event.target.files[0])
      const formData = new FormData();
      formData.append('file',event.target.files[0])
      this.http.post("https://storeapi.gera sim.in/api/Customer/Upload",formData).subscribe((res)=>{
        console.log(res)
      })
    }
    projectImage(file:any){
      let reader = new FileReader;
      reader.onload = (e:any)=>{
        this.source = e.target.result
        this.images.push(this.source)
      }
      reader.readAsDataURL(file);
    }

    selectState(event:any){
      // console.log(event);
      this.changeDistrictDropdown(event.target.value)
    }
    changeDistrictDropdown(value:string){
      console.log(value)
      this.filteredDistricts=[]
      this.districts.filter((district:District)=>{
        if(district.s_key == value){
          this.filteredDistricts.push(district)
        }
        return this.filteredDistricts;
      })
      console.log(this.filteredDistricts)
    }
}

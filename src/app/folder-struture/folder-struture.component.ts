import { Component, OnInit } from '@angular/core';
import { foldersData } from './folderData';



@Component({
  selector: 'app-folder-struture',
  templateUrl: './folder-struture.component.html',
  styleUrls: ['./folder-struture.component.less']
})
export class FolderStrutureComponent implements OnInit {
  public data:any;
  showFile:boolean =false;
  constructor(){
    
  }
  ngOnInit(): void {
      this.data = foldersData;
      console.log(this.data)
      // this.showFile = true
  }

  showSubFiles(folder:any){
    if(folder[0].isFolder){
    this.showFile = !this.showFile;

    }
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit{
  public role!:string;
  menuList:any =[
    // Customer:[
    //   {path:'movieTicket', title:'Movie Booking'},
    //   {path:'movies',title:'Movies'}
    // ],
    // BankEmployee:[
    //   {path:'userForm',title:'Rt-FOrms'},
    //   {path:'formData',title:'FormData'},
    //   {path:'material',title:'Material'},
    //   {path:'async',title:'Async'}
    // ]
      {path:'movieTicket', title:'Movie Booking',roles:['Customer','BankEmployee']},
      {path:'movies',title:'Movies', roles:['Customer','BankEmployee']},
      {path:'userForm',title:'Rt-FOrms',roles:['Customer','BankEmployee']},
      {path:'formData',title:'FormData',roles:['Customer','BankEmployee']},
      {path:'material',title:'Material',roles:['Customer','BankEmployee']},
      {path:'async',title:'Async',roles:['Customer','BankEmployee']},
      {path:'folder',title:'Folder',roles:['Customer','BankEmployee']},
      {path:'file',title:'File Upload',roles:['Customer','BankEmployee']},
      {path:'resolve',title:"Resolver",roles:['Customer','BankEmployee']},
      {path:'language',title:"i18n",roles:['Customer','BankEmployee']},
    ]
    constructor(private cd:ChangeDetectorRef){}
  
  public selectedMenuList:any= [];
  ngOnInit(): void {
    const role =sessionStorage.getItem('role')
    if(role){
      // this.cd.detectChanges()
      // const rolData = JSON.parse(role);
      this.menuList.filter((x:any)=>{
        if(x.roles.includes(role)){
          this.selectedMenuList.push(x)
        }
      })
      // this.selectedMenuList = this.menuList.roles
    }
  }
  

  
}

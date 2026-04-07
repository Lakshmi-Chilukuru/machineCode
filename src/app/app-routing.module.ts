import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TimerComponent } from './timer/timer.component';
import { FolderStrutureComponent } from './folder-struture/folder-struture.component';
import { RtFormsComponent } from './rt-forms/rt-forms.component';
import { FormDataComponent } from './form-data/form-data.component';
import { MaterialComponent } from './material/material.component';
import { AsyncComponent } from './async/async.component';
import { Async2Component } from './async2/async2.component';
import { LoginComponent } from './login/login/login.component';
import { authGuard } from './auth.guard';
import { Role } from './shared/roles';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ResolverComponent } from './resolver/resolver.component';
import { UserResolver } from './resolve.resolver';
import { I18nComponent } from './i18n/i18n.component';
import { NgrxComponent } from './ngrx/ngrx.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',pathMatch:"full",component:LoginComponent
  },
  {path:'movieTicket/:id',component:MovieBookingComponent,canActivate:[authGuard],data: { roles: [Role.Customer] }},
  {path:'movieTicket',component:MovieBookingComponent,canActivate:[authGuard],data: { roles: [Role.Customer] }},
  {
    path:'movies',component:MovieListComponent,canActivate:[authGuard],data: { roles: [Role.Customer] ,}
  },
  {
    path:'emp',
    loadChildren:()=>import('./employee/employee.module').then(x=>x.EmployeeModule)
  },
  
  {
    path:'timer',
    component:TimerComponent
  },
  {
    path:'folder',
    component:FolderStrutureComponent
  },
  {
    path:'userForm',
    component:RtFormsComponent,canActivate:[authGuard],data: { roles: [Role.Customer] }
  },
  {
    path:'formData',
    component:FormDataComponent,canActivate:[authGuard],data: { roles: [Role.BankEmployee]}
  },
  {
    path:'formData/:id',
    component:FormDataComponent
  },
  {
    path:'material',
    component:MaterialComponent,canActivate:[authGuard],data: { roles: [Role.Customer]}
  },
  {
    path:'async',
    component:AsyncComponent,canActivate:[authGuard],data: { roles: [Role.Customer]}
  },
  {
    path:'async2',
    component:Async2Component
  },
  {
    path:'language',component:I18nComponent
  },
  {
    path:'ngrx',component:NgrxComponent
  },
  {
    path:'file',
    component:FileUploadComponent
  },{path:'resolve',component:ResolverComponent,resolve:{user:UserResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

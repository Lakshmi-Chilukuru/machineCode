import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path:'movieTicket/:id',component:MovieBookingComponent},
  {path:'movieTicket',component:MovieBookingComponent},
  {
    path:'movies',component:MovieListComponent
  },
  {
    path:'',pathMatch:"full",component:MovieBookingComponent
  },
  {
    path:'emp',
    loadChildren:()=>import('./employee/employee.module').then(x=>x.EmployeeModule)
  },
  {
    path:'timer',
    component:TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

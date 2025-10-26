import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {path:'movieTicket',component:MovieBookingComponent},
  {
    path:'movies',component:MovieListComponent
  },
  {
    path:'',pathMatch:"full",component:MovieBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

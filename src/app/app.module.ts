import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FolderStrutureComponent } from './folder-struture/folder-struture.component';
import { RtFormsComponent } from './rt-forms/rt-forms.component';
import { SubFormComponent } from './rt-forms/sub-form/sub-form.component';
import { FormDataComponent } from './form-data/form-data.component';
import { CurrencyDirective } from './currency.directive';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AsyncComponent } from './async/async.component';
import { Async2Component } from './async2/async2.component';
import { ASyncService } from './async/service/a-sync.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CdkTableModule } from "@angular/cdk/table";
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { ResolverComponent } from './resolver/resolver.component';
import { UserResolver } from './resolve.resolver';

import {MatBadgeModule} from '@angular/material/badge'
import {MatIconModule} from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';
import {MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions, MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HooksComponent } from './ng_files/hooks/hooks.component';
import { I18nComponent } from './i18n/i18n.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countReducer } from './i18n/ngrx.reducer';
import { cP2 } from "./i18n/component2";
import { CartReducer } from './i18n/product/cart.reducer';
import { ProductReducer } from './i18n/product/product.reducer';
import { ProductEffects } from './i18n/product/product.effects';
import { NgrxComponent } from './ngrx/ngrx.component';
import { LoaderInterceptor } from './loader.interceptor';
import { LoanReducer } from './i18n/loan/loan.reducer';
import { LoanEffects } from './i18n/loan/loan.effects';
import { ScrollingModule  } from '@angular/cdk/scrolling';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { BodyPipe } from './material/bodypipe';
import { LoaderComponent } from './loader/loader.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieBookingComponent,
    MovieListComponent,
    TimerComponent,
    FolderStrutureComponent,
    RtFormsComponent,
    SubFormComponent,
    FormDataComponent,
    CurrencyDirective,
    MaterialComponent,
    AsyncComponent,
    Async2Component, 
    BodyPipe,
    LoginComponent, FileUploadComponent, LeaveBalanceComponent, LeaveRequestComponent, ResolverComponent, HooksComponent, I18nComponent, NgrxComponent, LoaderComponent
  ],
  imports: [
    MatTooltipModule,
    CdkDropList, CdkDrag,
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    CdkTableModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    StoreModule.forRoot({ 
      count: countReducer,
      cart:CartReducer,
      products:ProductReducer,
      loans: LoanReducer
     },
    ),
    EffectsModule.forRoot([ProductEffects,LoanEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false}),
    cP2
],
  providers: [ASyncService,
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions},
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor ,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

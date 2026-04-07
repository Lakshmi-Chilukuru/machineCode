import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, of, throwError } from 'rxjs';
import { MainService } from './service/main.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService:MainService) {}
  private requestCount:number =0;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {this.requestCount++;
  this.loaderService.show();
    console.log('started')
  return next.handle(request).pipe(
    finalize(() => {
      this.requestCount--;

      if (this.requestCount === 0) {
        this.loaderService.hide();
        console.log('ended')

      }
    })
  );
  }
}

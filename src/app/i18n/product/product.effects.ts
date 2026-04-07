import {MainService} from '../../service/main.service';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './product.action';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Product } from './product.reducer';
@Injectable()
export class ProductEffects{
    private actions$ = inject(Actions)
    private service = inject(MainService);

    loadProducts$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadProducts),   
            exhaustMap(()=>this.service.getData().pipe(
                tap(()=>console.log("... loading products")),
                map((products :Product[])=>loadProductsSuccess({products})),
                tap((value)=>console.log(value)),
                catchError((error) => of(loadProductsFailure({ error })))
            ))
        )
    })
}

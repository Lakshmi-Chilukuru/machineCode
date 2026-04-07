import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loanApproved } from "../loanFIles/loan.actions";
import { catchError, exhaustMap } from "rxjs";
import { disbursementFailure, disbursementSuccess } from "./disb.actions";

@Injectable()
export class LoanEffects{
    private actions$ = inject(Actions)
   disbLoan$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loanApproved),
            exhaustMap(({loanId})=>this.api.checkLoan(loanId).pipe(
                map(()=>disbursementSuccess(loanId)),
                catchError(err=>of(disbursementFailure(err)))
            ))
        )
   })
}
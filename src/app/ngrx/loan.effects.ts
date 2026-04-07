// import { inject, Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
// import { loanApproved, loanRejected } from "./ngrx-files/loanFIles/loan.actions";
// import { creditCheckFailure } from "./ngrx-files/creditCheck/credit-check.actions";

// @Injectable()
// export class LoanEffects{
//     private actions$ = inject(Actions)
    
//     processLoan$ = createEffect(()=>{
//         this.actions$.pipe(
//             ofType(submitLoanApplication),
//             exhaustMap((action)=>this.api.checkEligibility(action).pipe(
//                 switchMap(()=>this.api.checkCreditSCore(action).pipe(
//                     switchMap(()=>this.api.checkfraud(action).pipe(
//                         switchMap((fraudRes:any)=>{
//                             if(fraudRes.isFraud){
//                                 return of(loanRejected({value:"Fraud Detected"}))
//                             }
//                             return this.api.loanApproved(action).pipe(
//                                 map(res=>loanApproved({value:res.id})),
//                                 catchError(err=>of(fraudCheckFailure(err)))
//                             )
//                         }),
//                         catchError(err=>of(creditCheckFailure(err)))
//                     ),
//                 ),catchError(err=>of(creditCheckFailure(err)))
//                     ),
//                 ),
//                 catchError(err=>of(creditCheckFailure(err)))
//             ),
            
//         ),
//     )
//     })
// }
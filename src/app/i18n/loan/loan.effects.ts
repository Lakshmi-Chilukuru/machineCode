import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, exhaustMap, map, of, switchMap } from "rxjs";
import { MainService } from "src/app/service/main.service";
import { approveLoan, approveLoanFailure, approveLoanSuccess, loadLoans, loadLoansFailure, loadLoansSuccess, rejectLoan, rejectLoanFailure, rejectLoanSuccess } from "./loan.actions";
import { loan } from "./loan.reducer";

@Injectable()

export class LoanEffects{
    private actions$ = inject(Actions);
    private ms = inject(MainService)
    approveLoan$ = createEffect(() =>
    this.actions$.pipe(
    ofType(approveLoan),
    switchMap(({ id }) =>
      this.ms.approveLoan(id).pipe(
        map(() => approveLoanSuccess({ id })), // pass id
        catchError(err =>
          of(approveLoanFailure({ error: err.message }))
        )
      )
    )
  )
);
rejectLoan$ = createEffect(() =>
  this.actions$.pipe(
    ofType(rejectLoan),
    switchMap(({ id }) =>
      this.ms.rejectLoan(id).pipe(
        map(() => rejectLoanSuccess({ id })), // pass id
        catchError(err =>
          of(rejectLoanFailure({ error: err.message }))
        )
      )
    )
  )
);
}
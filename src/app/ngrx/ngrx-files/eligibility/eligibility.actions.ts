import { createAction, props } from "@ngrx/store"

export const loanEligibilitySuccess = createAction('[Loan Eligible] LoanEligible Success',props<{value:boolean}>())
export const loanEligibilityFailure = createAction('[Loan Eligible] LoanEligible Failure',props<{value:boolean}>())





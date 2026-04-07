import { createAction, props } from "@ngrx/store"

export const loanApproved = createAction('[Loan] Loan Approved',props<{value:string}>())
export const loanRejected = createAction('[Loan] Loan Rejected',props<{value:string}>())


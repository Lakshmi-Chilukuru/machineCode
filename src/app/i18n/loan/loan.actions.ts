import { createAction, props } from "@ngrx/store"

export const loadLoans = createAction('[Loan] Load Loans')
export const loadLoansSuccess = createAction('[Loan Api] Loaded Loans Successfully' ,props<{applications:any}>())
export const loadLoansFailure = createAction('[Loan Error] Loading Loans Failed',props<{error:string}>())
export const approveLoan = createAction('[Approve] LoanApproved',props<{id:number}>())
export const approveLoanSuccess = createAction('[Approve Api] Loan Approved Successfully',props<{id:number}>())
export const approveLoanFailure = createAction('[Approve Error] Loan Failure Error',props<{error:string}>())
export const rejectLoan = createAction('[Reject] Loan Rejeced',props<{id:number}>())
export const rejectLoanSuccess = createAction('[Approve Api] Loan Rejected Successfully',props<{id:number}>())
export const rejectLoanFailure = createAction('[Approve Error] Loan Rejection Error',props<{error:string}>())
export const updateLoanStage = createAction('[Loan Stage] Loan Stage',props<{id:number}>())
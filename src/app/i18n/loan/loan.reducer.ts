import { createReducer,on } from "@ngrx/store"
import { approveLoan, loadLoans, loadLoansFailure, loadLoansSuccess, rejectLoan } from "./loan.actions"



export interface loan{
    id:number,
    amount:number,
    status: 'Pending' | 'Approved' | 'Rejected',
    
}

export interface loanState {
    loans:loan[],
    loading:boolean,
    error:string | null
}
export const initialLoanState:loanState={
    loans: [],
    loading:true,
    error:""
}

export const LoanReducer =createReducer(
    initialLoanState,
   on(loadLoans,(state)=>({
    ...state,
    loading:true
   })),
   on(loadLoansSuccess,(state,{applications})=>({
    ...state,
    loans: [...applications],
    loading:false
   })),
   on(loadLoansFailure,(state,{error})=>({
    ...state,
    error:error
   })),
   on(approveLoan,(state,{id})=>({
    ...state,
    loans: state.loans.map(ln=>{
        return ln.id == id ? {...ln,status : "Approved"}:ln
    }),
    loading:false
   })),
   on(rejectLoan,(state,{id})=>({
    ...state,
    loans: state.loans.map(ln=>{
        return ln.id == id ? {...ln,status : "Rejected"}:ln
    }),
    loading:false
   }))

)
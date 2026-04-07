import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loanState } from "./loan.reducer";

// loans
export const selectFeatureLoan = createFeatureSelector<loanState>('loans');

export const selectAllloans = createSelector(
    selectFeatureLoan,
    state=>state.loans
)

export const selectApprovedLoans = createSelector(
    selectAllloans,
    state =>state.filter(loan=>loan.status == "Approved")
)

export const selectRejectedLoans = createSelector(
    selectAllloans,
    state =>state.filter(loan=>loan.status == "Rejected")
)
export const selectPendingLoans = createSelector(
    selectAllloans,
    state =>state.filter(loan=>loan.status == "Pending")
)

export const selectTotalLoans = createSelector(
    selectAllloans,
    state=>state.length
)
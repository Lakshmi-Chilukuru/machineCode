import { createAction, props } from "@ngrx/store"

export const disbursementSuccess = createAction('[Disbursment Stage] Disburement Success',props<{value:boolean}>())
export const disbursementFailure = createAction('[Disbursment Stage] Disburement Failure',props<{value:boolean}>())


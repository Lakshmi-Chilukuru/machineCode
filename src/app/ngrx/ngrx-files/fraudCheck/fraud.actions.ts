import { createAction, props } from "@ngrx/store"

export const fraudCheckSuccess = createAction('[Fraud Check] FraudCheck Success',props<{value:boolean}>())
export const fraudCheckFailure = createAction('[Fraud Check] FraudCheck Failure',props<{value:boolean}>())





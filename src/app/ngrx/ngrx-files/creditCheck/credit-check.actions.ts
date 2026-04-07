import { createAction, props } from "@ngrx/store"

export const creditCheckSuccess = createAction('[Credit Check] Credit Check Success',props<{value:boolean}>())
export const creditCheckFailure = createAction('[Credit Check] Credit Check Failure',props<{value:boolean}>())


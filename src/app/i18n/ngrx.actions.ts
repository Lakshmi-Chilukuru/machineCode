import { createAction, props } from "@ngrx/store";

export const add = createAction('[increment Count] Increment');
export const reduce = createAction('Decrement Count] Decrement');
export const reset = createAction('[resetCount] reset')

export const createUser = createAction('[Cart User] Create User',props<{userName:string,password:string}>())
export const getUser = createAction('[Get Users] Get Cart User',props<{user:any}>())
export const errorUser = createAction("[User Error] Error with User",props<{error:any}>())

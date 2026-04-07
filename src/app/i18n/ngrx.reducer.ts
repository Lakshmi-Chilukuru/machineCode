import { createReducer,on } from "@ngrx/store";
import * as CounterActions from './ngrx.actions'
export const intialState = 0;
export interface State{
    home:number,
    away:number
}
export const intialStateMatch:State ={
    home : 0,
    away : 0
}

export const countReducer = createReducer(
    intialState,
    on(CounterActions.add,(state)=>state+1),
    on(CounterActions.reduce,(state)=>state-1),
    on(CounterActions.reset,()=>0)
)
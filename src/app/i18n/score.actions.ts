import { createAction, props } from "@ngrx/store";

export const homeScore = createAction('[Home Score] Home Score');
export const awayScore = createAction('[Away Score] Away Score');
export const resetScore = createAction('[Reset Score] Reset Score');
export const setScore = createAction('[Home Score] set Score',props<{game:any}>());

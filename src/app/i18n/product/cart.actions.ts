import { createAction, props } from "@ngrx/store"

export const addToCart = createAction('[Add Item] Load Cart Data',props<{cart:any}>())
export const removeFromCart = createAction ('[Remove Item] Item Discarded',props<{id:number}>())
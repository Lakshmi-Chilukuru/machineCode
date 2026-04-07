import { createAction, props } from "@ngrx/store"

export const loadProducts = createAction('[Load Products] Load Products Data')
export const loadProductsSuccess = createAction('[Load Products Success] Load Products Successfully',props<{products:any}>())
export const loadProductsFailure = createAction('[Load Products Error] Load Products Error',props<{error:any}>())
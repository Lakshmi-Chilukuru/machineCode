// selectProducts
// selectCartItems
// selectCartCount
// selectTotalPrice

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { allItems } from './cart.reducer';
import * as Reference from './product.reducer';



export const selectedProductState = createFeatureSelector<Reference.LoadProducts>('products')
export const selectedCartState = createFeatureSelector<allItems>('cart')
export const selectProducts = createSelector(
    selectedProductState,
    state => state.products
)

// export const ProductsLoading = createSelector(
//     selectedProductState,
//     state => state.loading
// )    

export const selectCartItems = createSelector(
    selectedCartState,
    state =>state.items
)

export const selectCartCount =  createSelector(
    selectCartItems,
    items =>items.length
)

export const selectTotalPrice = createSelector(
    selectedCartState,
    state=>state.totalPrice
)



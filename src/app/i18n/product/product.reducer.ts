import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.action';

export interface Product{
    id : number,
    item : string
}
export interface LoadProducts{
    products:Product[];
    loading:boolean,
    error:string | null
}
export const initialState:LoadProducts ={
    products:[],
    loading :true,
    error:null
}
export const ProductReducer = createReducer(
    initialState,
    on(ProductActions.loadProducts,state=>({
        ...state,
        loading:true,
        error:null
    })),
    on(ProductActions.loadProductsSuccess,(state,{products})=>({
        ...state,
        products : [...products],
        loading:false,
        error:null
    })),
    on(ProductActions.loadProductsFailure,(state,{error})=>({
        ...state,
        error:error,
        loading:true,
    }))
)



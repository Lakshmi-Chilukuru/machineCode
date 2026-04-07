import { createReducer, on } from "@ngrx/store"
import { addToCart, removeFromCart } from "./cart.actions"

export interface Item{
    itemId:number,
    itemName:string,
    itemCost:number
}
export interface allItems{
    items:Item[],
    totalPrice:number,
    error:string | null
}

export const initialState:allItems ={
    items :[],
    totalPrice :0,
    error : null
}

export const CartReducer = createReducer(
    initialState,
    on(addToCart,(state,{cart})=>{
        const updatedItems = [...state.items,cart]
        return{
        ...state,
        items :[...updatedItems],
        totalPrice : updatedItems.reduce((acc,curr)=>acc+curr.itemCost,0),
        error: null 
        }
    }),
    on(removeFromCart,(state,{id})=>{
        const finalProducts = state.items.filter(item=>item.itemId != id)
        return{
            ...state,
            items :[...finalProducts],
            totalPrice : finalProducts.reduce((acc,curr)=>acc+curr.itemCost,0),
            error: null 
        }
    })

)
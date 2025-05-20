import { configureStore } from '@reduxjs/toolkit' 
import { productReducers } from '../features/ProductSlice'
import { cartReducer } from '../features/CartSlice'


export const store=configureStore({
    reducer:{
        products:productReducers,
        cart:cartReducer
        

    }
})
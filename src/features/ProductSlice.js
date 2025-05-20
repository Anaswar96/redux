import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState={
    product:[],
    loading:false,
    error:''
}
export const fetchData = createAsyncThunk(
    'product/fetchData',
    async ()=>{
        const res = await fetch ("https://dummyjson.com/products?limit=130")
        const data=await res.json()
        return data
    }

)
const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.payload
        })
    }

})
export const {reducer:productReducers}=ProductSlice
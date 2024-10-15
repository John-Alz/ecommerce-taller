import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    dataSingleProduct: [],
    page: 1
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        },
        setdataSingleProduct: (state, action) => {
            state.dataSingleProduct = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProducts, setdataSingleProduct, setPage } = productsSlice.actions

export default productsSlice.reducer
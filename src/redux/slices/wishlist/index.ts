import { createSlice } from "@reduxjs/toolkit"

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, {payload}) => {
            if (state.products.find(({ id }) => id === payload?.id)) {
                 state.products.filter(({ id }) => id !== payload?.id);
            } else {

                state.products.push(payload);
            }
        },
        removeProduct: (state, {payload}) => {
            state.products = state.products.filter(({id}) => id !== payload?.id);
        },
        
    }
})

export default wishlistSlice.reducer;
export const {addProduct, removeProduct} = wishlistSlice.actions;
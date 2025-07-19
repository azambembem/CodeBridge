import type { IProduct } from "@/types/home";
import { createSlice } from "@reduxjs/toolkit"

type TInitialState = {
    products: (IProduct & {quantity: number}) []
}

const initialState: TInitialState ={
    products: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist", // name unique bulishi kerak!
    initialState, // boshlangich holat // useState boshlangich holat bn bixil deb tushunsa ham buladi
    reducers: {
        addProduct: (state, {payload}: {payload: IProduct & Partial <{quantity?: number}>},) => {

            const foundProduct = state.products.find(({_id}) => _id === payload._id);

            if (foundProduct) {
                state.products.filter(({ _id }) => _id !== payload?._id);
                
            }if (!foundProduct) {
                
                state.products.push({...payload, quantity: payload.quantity ?? 1});

            }
                
            },
        
        removeProduct: (state, {payload}: {payload: IProduct}) => {
            state.products = state.products.filter(({_id}) => _id !== payload?._id);
        },
        setProduct: (
            state, {payload} : {payload: Partial<IProduct & {quantity: number}> },
        ) => {
            state.products = state.products.map((product) => {
                if (product._id === payload._id) {
                    return {...product,...payload};
                }
                return product;
            })
        },
        setInitialState: (state) => {
            state.products = [];
        }
        
    }
})

export default wishlistSlice.reducer;
export const {addProduct, removeProduct, setProduct, setInitialState} = wishlistSlice.actions;
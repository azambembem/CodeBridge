import {configureStore} from "@reduxjs/toolkit";
import  wishlist  from "./slices/wishlist";

const store = configureStore({
    
    reducer: {
       wishlist
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

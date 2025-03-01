import {configureStore} from "@reduxjs/toolkit";
import  wishlist  from "./slices/wishlist";

export default configureStore({
    reducer: {
       wishlist
    },
})
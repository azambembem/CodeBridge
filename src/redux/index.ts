import {configureStore} from "@reduxjs/toolkit";
import  wishlist  from "./slices/wishlist";

const store = configureStore({
    
    reducer: {
       wishlist
    },
})

export default store; // storeni global bo'lib xoxalagan fayldan turib ishlatsak buladi. (useDispatch & useSelector) orqali

export type RootState = ReturnType<typeof store.getState>; // getState -> reducer ichidagi {wishlist}ga teng
export type AppDispatch = typeof store.dispatch; // dispatch qanaqa type ega bulsa AppDispatch tegishli buladi

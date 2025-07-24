import { configureStore } from "@reduxjs/toolkit";
// import signUpModalReducer from "./stores/sign-up";
// import forgotPasswordReducer from "./stores/forgot-password";
// import manageAccountReducer from "./stores/my-profile/manage-account";
import navbarReducer from "./stores/navbar";

const store = configureStore({
  reducer: {
    // signUpModal: signUpModalReducer,
    // forgotPasswordFlow: forgotPasswordReducer,
    // manageAccount: manageAccountReducer,
    navbar: navbarReducer
  }
});

export default store; // storeni global bo'lib xoxalagan fayldan turib ishlatsak buladi. (useDispatch & useSelector) orqali

export type RootState = ReturnType<typeof store.getState>; // getState -> reducer ichidagi {wishlist}ga teng
export type AppDispatch = typeof store.dispatch; // dispatch qanaqa type ega bulsa AppDispatch tegishli buladi

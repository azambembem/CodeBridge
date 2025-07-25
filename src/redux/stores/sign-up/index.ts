import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  isServiceTermsOpen: boolean;
  isPrivacyTermsOpen: boolean;
  isEmailVerificationOpen: boolean;
  showSuccessPage: boolean;
  userEmail: string;
  // Agar ro'yxatdan o'tishda maxsus xato modallari bo'lsa, ularni ham shu yerga qo'shishingiz mumkin,
  // masalan: emailAlreadyExistsModal: boolean;
};

const initialState: TInitialState = {
  isServiceTermsOpen: false,
  isPrivacyTermsOpen: false,
  isEmailVerificationOpen: false,
  showSuccessPage: false,
  userEmail: "",
};

export const signUpModalSlice = createSlice({
  name: "sign-up/modal", // `sign-in/modal` ga o'xshash, noyob nom
  initialState,
  reducers: {
    // `signInModalSlice` dagi `setModal` ga o'xshash
    setSignUpModal: (
      state,
      { payload }: { payload: Partial<TInitialState> }
    ) => {
      Object.assign(state, payload);
    },
    // Elektron pochta manzilini tasdiqlash uchun saqlash
    setUserEmailForVerification: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    // Barcha ro'yxatdan o'tishga oid modallarni nolga qaytarish (yopish)
    // Bu `resetPasswordAttempts` ga o'xshash tozalash funksiyasi
    resetSignUpModals: (state) => {
      state.isServiceTermsOpen = false;
      state.isPrivacyTermsOpen = false;
      state.isEmailVerificationOpen = false;
      state.showSuccessPage = false;
      state.userEmail = "";
    },
  },
});

export const {
  setSignUpModal,
  setUserEmailForVerification,
  resetSignUpModals,
} = signUpModalSlice.actions;
export default signUpModalSlice.reducer;

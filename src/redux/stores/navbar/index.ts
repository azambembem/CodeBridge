import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  menuOpen: boolean;
};

const initialState: TInitialState = {
  menuOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setStore: (state, { payload }: { payload: Partial<TInitialState> }) => {
      Object.assign(state, payload);
    },
  },
});

export const { setStore } = navbarSlice.actions;
export default navbarSlice.reducer;

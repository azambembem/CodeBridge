import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux";

export const useReduxDishpatch = () => useDispatch<AppDispatch>();

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
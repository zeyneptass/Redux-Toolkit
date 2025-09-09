import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
// Storeé'a action'lar dispatch edebilmek için kullanılır.
export const useAppDispatch : () => AppDispatch = useDispatch;
// Store'un durumunu okumak için kullanılır.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

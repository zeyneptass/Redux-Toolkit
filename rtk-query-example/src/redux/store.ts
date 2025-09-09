import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { usersApi } from "../api/api";

export const store = configureStore({
    reducer:{
        //Objenin key değerini kullanmak için [] ile kullanılır
        [usersApi.reducerPath] : usersApi.reducer
    },
    // asenkron işlemler için middleware kullanılır
    // concat kullanım amacı middleware'leri birleştirmek için kullanılır
    // ara katman demektir
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
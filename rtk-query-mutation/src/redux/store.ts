import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    //reducer :  store'dan gelen isteği işleyen birimlerdir
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    // Store'a giden istekleri arka planda çalıştırıp işleyen birimlerdir
    // Reducer'lar haricinde arka planda bir şeyler yapmak istiyorsak burada yaparız
    // Middleware'lar ne yapar : 
    // Loglama : Redux'a hangi istekler gidiyor
    // LocalStorage : Redux'a veri kaydetmek için kullanılır
    // Web istekleri :  Store'a giden web isteklerini middleware ile yapıyoruz
    middleware: (getDefaultMiddleware) =>               
    getDefaultMiddleware().concat(usersApi.middleware),
    // birden fazla middleware kullanıyorsak concat ile birleştiriyoruz
})  



// TypeScript ile uyumlu hale getirmek için aşağıdaki hooks kullanılır.
// Hooks
// Storeé'a action'lar dispatch edebilmek için kullanılır.
export const useAppDispatch : () => AppDispatch = useDispatch;
// Store'un durumunu okumak için kullanılır.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export type User = {
    id: number;
    name: string;
};

const API_URL = "http://localhost:3002";

export const usersApi = createApi({
    // reducerPath ile API'ye benzersiz bir ad veriyoruz
    reducerPath: "usersApi",
    // request geldiğinde ne yapılacağını belirtiyoruz
    // fetchBaseQuery ile API'ye istek göndereceğiz
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    // APOI içndeki tagler aşağıda verilir. Örneğin: ["Users","Posts","Todos","Products","Credits"]
    // refresh yapmadan verileri alabilmek için tagTypes kullanıyoruz
    tagTypes: ["Users"],
    // Endpoint listesini burada veriyoruz
    //ilk parametere dönen liste tipini belirtiyoruz ikinci parametre alıyorsa alacağımız veri tipini belirtiyoruz almıyorsa void veriyoruz
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/users",
            // refresh yapmadan verileri alabilmek için tagTypes kullanıyoruz
            providesTags: ["Users"]
        }),
        addUser: builder.mutation<User, Omit<User, "id">>({
            query:(user) =>({
                url:"/users",
                method: "POST",
                body:{name: user.name}
            }),
            // refresh yapmadan verileri alabilmek için tagTypes kullanıyoruz
            // Cache'i invalidatesTags ile geçersiz kılıyoruz
            // Logoff işlemleri için çok gerekli
            invalidatesTags: ["Users"]
        })
    })
})

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
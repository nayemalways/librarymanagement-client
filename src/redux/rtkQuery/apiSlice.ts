import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    tagTypes: ["book"],
    endpoints: builder => ({
        getBook: builder.query({
            query: () => "todos",
            providesTags: ["book"]
        })
    })
})

export const { useGetBookQuery } = baseApi;
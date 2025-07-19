//apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://libmanage-eight.vercel.app/api",
        mode: 'cors'
    }),
    tagTypes: ["book", "borrow"],
    endpoints: builder => ({
        getBook: builder.query({
            query: () => "book",
            providesTags: ["book"]
        }),
        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `book/${bookId}`,
                method: 'DELETE'
            }),
           invalidatesTags: ['book']
        }),
        borrowBook: builder.mutation({
            query: (payload) => ({
                url: `borrow`,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: payload
            }),
           invalidatesTags: ['borrow']
        })
        
    })
})

export const { useGetBookQuery, useDeleteBookMutation, useBorrowBookMutation } = baseApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetCurrentUserQuery } = usersApi;

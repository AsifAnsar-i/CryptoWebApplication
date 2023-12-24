import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "e8b8469553msh7fd87544ddf6cb7p18c261jsn937eb8a7ecef",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptosApi = createApi({
  reducerPath: "cryptosApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptosApi;

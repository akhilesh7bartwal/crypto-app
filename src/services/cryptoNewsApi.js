import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader= {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c5b9e25831mshf0188db39444b1dp1fdc5fjsnc1d5950db9b2',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };
 
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeader});

export const cryptoNewsApi = createApi({
    reducePath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
             
        })
    })
});     

export const {useGetCryptoNewsQuery} = cryptoNewsApi;

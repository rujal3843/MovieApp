import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '2a0f926961d00c667e191a21c14461f8';



export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({


    getTrending: builder.query({
      query: () => ({
        url: '/trending/all/day',
        params: {
          api_key: apiKey
        }
      })
    }),



    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey
        }

      })
    }),


    getMovieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        params: {
          api_key: apiKey,
          page: query.page
        }

      })
    }),


    getMovieVideo: builder.query({
      query: (query) => ({
        url: `/movie/${query}/videos`,
        params: {
          api_key: apiKey
        }

      })
    }),

    getSearchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        params: {
          api_key: apiKey,
          query: query
        }
      })
    }),

    getLatestMovie: builder.query({
      query: () => ({
        url: '/movie/latest',
        method:'GET',
        params: {
          api_key: apiKey,
        }
      })
    }),
    
    getGenre: builder.query({
      query: () => ({
        url: '/genre/movie/list',
        method:'GET',
        params: {
          api_key: apiKey
        }
      })
    }),

    getPopular: builder.query({
      query: () => ({
        url: '/person/popular',
        params: {
          api_key: apiKey
        }
      })
    }),

    getDetail: builder.query({
      query: (query) => ({
        url: `/person/${query}`,
        params: {
          api_key: apiKey
        }

      })
    }),



  })

});


export const { useGetMovieByCategoryQuery, useGetSearchMovieQuery, useGetTrendingQuery, useGetMovieVideoQuery, useGetMovieByPageQuery,useGetLatestMovieQuery,useGetGenreQuery,useGetPopularQuery,useGetDetailQuery } = movieApi;
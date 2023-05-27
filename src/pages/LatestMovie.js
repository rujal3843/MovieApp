import React from 'react'
import { useGetLatestMovieQuery } from '../features/movie_api'

export const LatestMovie = () => {
  const { data, isLoading, error } = useGetLatestMovieQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className='bg-slate-800 text-white font-bold text-center text-[30px] '>
     <h1 className=''>Name: {data.title}</h1>
      <p className='my-5'>Status: {data.status}</p>
      <p className='my-5'>Language: {data.original_language}</p>
      <p className='my-5'>Overview:  {data.overview}</p>
    </div>
  );
};
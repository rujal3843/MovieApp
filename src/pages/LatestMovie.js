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
    <div>
      <h1>{data.title}</h1>
      <p>{data.status}</p>
      {/* <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`} /> */}
      <p>{data.overview}</p>
    </div>
  );
};
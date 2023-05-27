import React from 'react'
import { useParams,useNavigate } from 'react-router'
import { useGetSearchMovieQuery } from '../features/movie_api';
// import { Image, Shimmer } from 'react-shimmer';

const SearchPage = () => {

  const nav = useNavigate()
  const { searchText } = useParams();

  const {  data } = useGetSearchMovieQuery(searchText);

 

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5 bg-gray-600'>
      {data && data.results.map((movie) => {
        return  <div onClick={() => nav(`movie/detail/${movie.id}`, { state: movie })} key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />
          <div className='p-4'>
            <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview.substring(0, 60) + '....'}</p>
          </div>
        </div>
      })}
    </div>
  )
}
xyx
export default SearchPage;
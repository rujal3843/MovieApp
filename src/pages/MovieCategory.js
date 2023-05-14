import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetMovieByCategoryQuery } from '../features/movie_api';

const MovieCategory = () => {
  const nav = useNavigate();
  const { category } = useParams();
  const {  data } = useGetMovieByCategoryQuery(category);
  

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5'>
        {data && data.results.map((movie) => {
          return <div onClick={() => nav(`/movie/detail/${movie.id}`, { state: movie })} key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />
            <div className='p-4'>
              <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
              <p>{movie.overview.substring(0, 60) + '....'}</p>
            </div>
          </div>
        })}
      </div>
      <div className='flex justify-center space-x-5 pb-4'>
        {data?.page > 1 && <button>Prev</button>}
        <h1>{data?.page}</h1>
        <button onClick={() => nav(`/movie/${category}/${data.page + 1}`)}>Next</button>
      </div>


    </>
  )
}

export default MovieCategory
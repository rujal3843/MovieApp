import React from 'react'
import { useGetPopularQuery } from '../features/movie_api'
import { useNavigate } from 'react-router-dom';

export const Popular = () => {
  const {data} = useGetPopularQuery();
  console.log(data)

  const nav = useNavigate()

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5 bg-gray-600'>
    {data && data.results.map((movie) => {
      return  <div  onClick={()=> nav(`/person/popular/${movie.id}`)} key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer'>
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.profile_path}`} alt="" />
        <div className='p-4'>
          <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
          <p>{movie.known_for_department}</p>
        </div>
      </div>
    })}
  </div>
  )
}

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetailQuery } from '../features/movie_api';

export const PopularDetail = () => {
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);

  return (
    <>
      {data && (
        <div className='grid grid-cols-1 md:grid-cols-[1fr,2fr]'>

          <div className='md:mt-5 md:ml-10 hover:scale-105 ease-in duration-300 cursor-pointer'>
            <img className="md:h-[70%]  " src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.profile_path}`} alt="" />
          </div>


          <div>
            <h1 className='mt-5 md:mt-0 text-[40px] font-extrabold'>{data.name}</h1>
            <h2 className='text-[20px] md:text-[25px] font-bold mt-10'>Biography</h2>
            <p className='md:mt-3 md:mr-10 text-justify'>{data.biography}</p>
          </div>

        </div>
      )}
    </>
  );
};

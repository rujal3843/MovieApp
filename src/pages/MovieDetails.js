import React from 'react';
import { useParams } from 'react-router';
import { useGetMovieVideoQuery } from '../features/movie_api';

const MovieDetail = () => {
  const { id } = useParams();
  const { data } = useGetMovieVideoQuery(id);

  return (
    <div>

      <div className='w-[70%] p-5 mt-[5%]'>
        <iframe 
          src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} 
          title={`Trailer for Movie ID ${id}`}
          className='aspect-video w-full' 
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default MovieDetail;

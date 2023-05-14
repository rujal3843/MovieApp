import { useFormik } from 'formik'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


export const Header = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/movie/search/${val.search}`);
      resetForm();
      setNavi(false); // hide mobile menu
    }
  });
  const [navi, setNavi] = useState(false)
  const handleclick = () => setNavi(!navi)

  return (
    <div className='w-full h-[100px] flex bg-black text-white justify-between items-center px-4'>
      <div>
        <NavLink to='/' className='text-xl'>TMDB</NavLink>
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>

        <li className="relative group">
          <NavLink to='#' className='hover:bg-pink-500' >Movies</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-slate-600">
            <li> <NavLink to='/movie/popular' className='hover:bg-pink-500'  >Popular</NavLink></li>
            <li> <NavLink to='/movie/top_rated' className='hover:bg-pink-500' >TopRated</NavLink></li>
            <li><NavLink to='/movie/upcoming' className='hover:bg-pink-500' >UpComing</NavLink></li>
            <li><NavLink to='/movie/now_playing' className='hover:bg-pink-500' >NowPlaying</NavLink></li>
          </ul>
        </li>


        <li><NavLink to='/movie/latest' className='hover:bg-pink-500' >Latest</NavLink></li>
        <li><NavLink to='/person/popular' className='hover:bg-pink-500' >People</NavLink></li>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              className='outline-none px-2 text-black'
              onChange={formik.handleChange}
              name='search'
              value={formik.values.search}
              type="text" placeholder='search movie' />
          </div>
        </form>
      </ul>

      {/* icons */}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={
        !navi
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }>
        <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/'>TMDB</NavLink></li>

        <li className="relative group">
          <NavLink to='#' className='hover:bg-pink-500 text-[25px]' >Movies</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-slate-600">
            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/movie/popular'>Popular</NavLink></li>
            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/movie/top_rated'>TopRated</NavLink></li>
            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/movie/upcoming'>Upcoming</NavLink></li>
            <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/movie/now_playing'>NowPlaying</NavLink></li>
          </ul>
        </li>

        <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/movie/latest'>Latest</NavLink></li>
        <li className='py-2 text-[25px]'><NavLink onClick={handleclick} to='/person/popular'>People</NavLink></li>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              className='outline-none px-2 text-black'
              onChange={formik.handleChange}
              name='search'
              value={formik.values.search}
              type="text" placeholder='search movie' />
          </div>
        </form>


      </ul>
    </div>
  );
};


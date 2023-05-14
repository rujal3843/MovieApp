import React from 'react'
import {Header} from './Components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MovieCategory from './pages/MovieCategory'
import MovieDetails from './pages/MovieDetails'
import MoviePage from './pages/Moviepage'
import SearchPage from './pages/SearchPage'
import { LatestMovie } from './pages/LatestMovie'
import { Popular } from './pages/Popular'
import { PopularDetail } from './pages/PopularDetail'


const App = () => {

  return (
    <>
    <Header />

      <Routes>
       
          <Route index element={<Home />} />
          <Route path='movie/:category' element={<MovieCategory />}></Route>
          <Route path='movie/detail/:id' element={<MovieDetails />} />
          <Route path='movie/:category/:page' element={<MoviePage />} />
          <Route path='movie/search/:searchText' element={<SearchPage />} />
          <Route path='movie/latest' element={<LatestMovie />} />
          <Route path='person/popular' element={<Popular />} />
          <Route path='person/popular/:id' element={<PopularDetail />} />

          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
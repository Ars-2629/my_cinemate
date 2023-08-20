import {Routes,Route} from 'react-router-dom';
import { MovieList,MovieDetails,VideoPlayer,PageNotFound,Search } from '../pages';

export default function AllRoutes() {
  return (
   <div className='dark:bg-gray-800'>
   <Routes>
    <Route path="/" element={<MovieList apiPath = '/movie/now_playing' pageTitle='Home'/>} />
    <Route path="movie/:id" element={<MovieDetails />} />
    <Route path="movies/popular" element={<MovieList apiPath='/movie/popular' pageTitle='Popular'/>} />
    <Route path="movies/top" element={<MovieList apiPath='/movie/top_rated' pageTitle='Top Rated'/>} />
    <Route path="movies/upcoming" element={<MovieList apiPath='/movie/upcoming' pageTitle='Upcoming'/>} />
    <Route path="video/:id" element={<VideoPlayer/>} />
    <Route path="search" element={<Search apiPath='/search/movie'/>} />
    <Route path="*" element={<PageNotFound/>} />
   </Routes>
   </div>
  )
}

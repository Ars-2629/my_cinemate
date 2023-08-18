import { useEffect } from 'react';
import {useFetch} from '../hooks/useFetch';
import { Cards } from '../components';
import { useSearchParams } from 'react-router-dom';
export function Search({apiPath}) {
  const [searchParams]=useSearchParams();
  const queryTerm = searchParams.get('q');
  const {data:movies}=useFetch(apiPath,queryTerm);

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}/Cinemate`;
  },[queryTerm])

  return (
        <main>
        <section>
          <p className='ml-7 mt-5 text-gray-800 text-xl dark:text-white '>{(movies.length===0 ? `No Result Found For '${queryTerm}'` : `Result For '${queryTerm}'`)}</p>
        </section>
      <section className="py-5 px-2.5">
        <div className="flex justify-start flex-wrap other:justify-center">
          {movies.map((movie)=>(
            <Cards key={movie.id} movie = {movie} />
          ))}
         
        </div>
      </section>
    </main>
  )
}

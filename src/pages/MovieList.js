import { useFetch } from '../hooks/useFetch';
import { usePageTitle } from '../hooks/usePageTitle';
import { Cards } from '../components';


export function MovieList({apiPath,pageTitle}) {
const {data:movies}=useFetch(apiPath);
usePageTitle({pageTitle});

  
 
  return (
    <main>
      <section className="py-5 px-2.5">
        <div className="flex justify-start flex-wrap max-sm:justify-center">
          {movies.map((movie)=>(
            <Cards key={movie.id} movie = {movie} />
          ))}
         
        </div>
      </section>
    </main>
  );
}

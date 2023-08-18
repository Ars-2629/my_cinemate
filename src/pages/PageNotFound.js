import { useEffect } from 'react';
import Unknown from '../assets/images/pagenotfound.png';
import { Button } from '../components';

export function PageNotFound() {

  useEffect(()=>{
    document.title="Page Not Found/Cinemate";
  },[])

  return (
    <main>
      <section className="flex justify-center flex-col px-2">
        <div className='flex flex-col items-center'>
           <p className='text-5xl my-5 text-gray-700 font-bold dark:text-gray-100' >404,Oops</p>

           <div className='max-w-md'>
           <img className='rounded-lg' src={Unknown} alt="404 Page Not Found" />
           </div>
        </div>
        <div className='flex justify-center my-4'>
             <Button>Back To Cinemate</Button>
       </div>
      </section>
    </main>
  )
}

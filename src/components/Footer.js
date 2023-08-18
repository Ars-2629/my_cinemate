import { Link } from 'react-router-dom';
export function Footer() {
  return (
   
 <footer className="p-4 border-t-2 border-gray-200 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-t-2 dark:border-gray-800">
<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
<ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
        <a href="https://www.facebook.com/rahilsiddiqui5859?mibextid=ZbWKwL" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6 ">Instagram</a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/mohammad-aazib-a17636125" target="_blank"  rel='noreferrer' className="mr-4 hover:underline md:mr-6">LinkedIn</a>
    </li>
    <li>
        <a href="https://instagram.com/rahil6546?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6">Youtube</a>
    </li>
    <li>
        <a href="https://github.com/Ars-2629" target="_blank" rel='noreferrer' className="hover:underline">Github</a>
    </li>
</ul>
</footer>

  )
}

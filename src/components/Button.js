import { Link } from 'react-router-dom';

export function Button({children}) {
  return (
    <div>
        <Link to="/">
          <button className='bg-blue-700 py-2 px-2 rounded-lg text-gray-200 font-medium ml-5'>{children}</button>
          </Link>
    </div>
  )
}

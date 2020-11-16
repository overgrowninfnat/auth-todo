import { useContext } from 'react';
import { UserContext } from '../pages/api/utils/AuthProvider';

export default function Navbar() {
  const session = useContext(UserContext);
  return (
    <nav className='flex justify-between items-center py-4'>
      <h1 className='text-2xl font-bold text-grey-800'>Authenticated Todos</h1>
      <div className='flex'>
        {session === null ? (
          <div></div>
        ) : session === false ? (
          <a
            href='/api/login'
            className='rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 transition duration-500'
          >
            Login
          </a>
        ) : (
          <a
            href='/api/logout'
            className='rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 transition duration-500'
          >
            Logout
          </a>
        )}
      </div>
    </nav>
  );
}

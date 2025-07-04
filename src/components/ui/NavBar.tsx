import { Link } from 'react-router';
import { IoLocationSharp } from 'react-icons/io5';
import { menuList } from '@/utils';

const NavBar = () => {
  return (
    <div className='navbar bg-base-300 sticky top-0 z-50'>
      <div className='navbar-start'>
        <label htmlFor='main-drawer' className='btn btn-square btn-ghost lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-6 w-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
        <Link to='/' className='flex items-center text-3xl'>
          <IoLocationSharp />
          Venued
        </Link>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {menuList.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className='flex items-center'>
                {item.icon && <span className='mr-2'>{item.icon}</span>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

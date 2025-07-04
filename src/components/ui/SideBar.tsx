import { Link } from 'react-router';
import { menuList } from '@/utils';

const SideBar = () => {
  return (
    <div className='drawer-side'>
      <label htmlFor='main-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
      <ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
        <li className='mb-2'>
          <h2 className='menu-title'>Navigation</h2>
        </li>
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
  );
};
export default SideBar;

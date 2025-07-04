import { Outlet } from 'react-router';
import { NavBar, SideBar, Footer } from '@/components';

const MainLayout = () => {
  return (
    <div className='drawer'>
      <input id='main-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <NavBar />
        <div className='min-h-[calc(100vh-64px-68px)] container mx-auto'>
          <Outlet />
        </div>
        <Footer />
      </div>
      <SideBar />
    </div>
  );
};
export default MainLayout;

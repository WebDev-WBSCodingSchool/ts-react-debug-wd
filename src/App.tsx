import { BrowserRouter, Routes, Route } from 'react-router';
import { MainLayout, ProtectedLayout } from '@/layouts';
import { Events, Home, NotFound, Login, Register, CreateEvent } from '@/pages';
import { ErrorBoundary, Loading } from '@/components';
import { getAllEvents } from '@/data';
import { createEventAction, loginAction, registerAction } from '@/actions';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}
          hydrateFallbackElement={<Loading />}
          errorElement={<ErrorBoundary />}
        >
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} action={loginAction} />
          <Route path='/register' element={<Register />} action={registerAction} />
          <Route path='events' element={<Events />} loader={getAllEvents} />
          <Route path='app' element={<ProtectedLayout />} action={createEventAction}>
            <Route index element={<CreateEvent />} loader={getAllEvents} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

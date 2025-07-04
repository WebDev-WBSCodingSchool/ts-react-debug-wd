import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { MainLayout } from '@/layouts';
import { Events, Home, NotFound } from '@/pages';
import { ErrorBoundary, Loading } from '@/components';
import { getAllEvents } from '@/data';
import { createEventAction } from '@/actions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<MainLayout />}
      hydrateFallbackElement={<Loading />}
      errorElement={<ErrorBoundary />}
    >
      <Route index element={<Home />} loader={getAllEvents} action={createEventAction} />
      <Route path='events' element={<Events />} loader={getAllEvents} action={createEventAction} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

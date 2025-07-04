import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { getAllEvents } from '@/data';
import { createEventAction } from '@/actions';
import { Home } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} loader={getAllEvents} action={createEventAction} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

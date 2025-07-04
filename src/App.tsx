import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { MainLayout } from '@/layouts';
import { Home } from '@/pages';
import { Loading } from '@/components';
import { getAllEvents } from '@/data';
import { createEventAction } from '@/actions';

let a = 1;
a = 'test'; // This line is just to demonstrate that the code is being executed in a TypeScript environment.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />} hydrateFallbackElement={<Loading />}>
      <Route path='/' element={<Home />} loader={getAllEvents} action={createEventAction} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

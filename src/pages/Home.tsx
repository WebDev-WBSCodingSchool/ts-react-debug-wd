import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  console.log('Home data:', data);
  return <div>Home</div>;
};
export default Home;

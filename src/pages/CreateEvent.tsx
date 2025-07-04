import { useAuth } from '@/contexts';

const CreateEvent = () => {
  const { user } = useAuth();

  return (
    <>
      <div>Welcome back, {user?.name || user?.email}!</div>
    </>
  );
};
export default CreateEvent;

import { Form, useActionData, Link, Navigate } from 'react-router';
import { useAuth } from '@/contexts';

const Login = () => {
  const actionData = useActionData();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to='/app' replace />;

  return (
    <div className='min-h-screen flex items-center justify-center bg-base-200'>
      <div className='w-full max-w-md p-8 space-y-4 bg-base-100 shadow-xl rounded-box'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Sign in to your account</h2>
        </div>
        {actionData?.error && (
          <div className='alert alert-error'>
            <span>{actionData.error}</span>
          </div>
        )}
        <Form method='post' className='space-y-4'>
          <div className='form-control'>
            <label htmlFor='email' className='label'>
              <span className='label-text'>Email address</span>
            </label>
            <input
              id='email'
              name='email'
              type='email'
              required
              placeholder='Enter your email'
              className='input input-bordered w-full'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password' className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              id='password'
              name='password'
              type='password'
              required
              placeholder='Enter your password'
              className='input input-bordered w-full'
            />
          </div>
          <div className='form-control'>
            <button type='submit' className='btn btn-primary w-full'>
              Sign in
            </button>
          </div>
          <div className='text-center'>
            <Link to='/register' className='link link-primary'>
              Don’t have an account? Sign up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;

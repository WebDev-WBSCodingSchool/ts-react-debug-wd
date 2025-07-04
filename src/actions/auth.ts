import { redirect } from 'react-router';
import z from 'zod/v4';

const API_URL = import.meta.env.VITE_EVENTS_API_URL;

export async function loginAction({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const loginSchema = z.object({
      email: z.email('Invalid email address'),
      password: z.string().min(8, 'Password must be at least 6 characters long')
    });
    const { data, error, success } = loginSchema.safeParse({
      email,
      password
    });
    if (!success) throw new Error(z.prettifyError(error));
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }
    const { user, token } = await response.json();
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return redirect('/app');
  } catch (error) {
    return {
      error: error.message
    };
  }
}

export async function registerAction({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const newUserSchema = z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.email('Invalid email address'),
      password: z.string().min(8, 'Password must be at least 6 characters long')
    });
    const { data, error, success } = newUserSchema.safeParse({
      name,
      email,
      password
    });
    if (!success) throw new Error(z.prettifyError(error));
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Registration failed');
    }
    return redirect('/login');
  } catch (error) {
    return {
      error: error.message
    };
  }
}

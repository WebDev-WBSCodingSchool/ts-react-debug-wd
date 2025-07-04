import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from '.';

const API_URL = import.meta.env.VITE_EVENTS_API_URL;

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tryToLoginUser = async () => {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');
      if (savedToken && savedUser) {
        const response = await fetch(`${API_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${savedToken}`
          }
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to get profile');
        }
        const profile = await response.json();
        setToken(savedToken);
        setUser(profile);
      }
      setLoading(false);
    };
    tryToLoginUser();
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const isAuthenticated = Boolean(token && user);

  const value = {
    user,
    token,
    logout,
    isAuthenticated,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

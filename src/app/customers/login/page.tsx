'use client';

import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import { userLogin } from '../../../api/user';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useLogin } from '../../context/LoginContext';
import Link from 'next/link';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setLoginStatus } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await userLogin(formData);

      if (res.status === 200) {
        const { userType, user_id, accessToken, message } = res.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('userType', userType);

        // Update global login state
        setLoginStatus(true);

        // Redirect based on user type
        router.push(userType === 'provider' ? '/dashboard/ManageAccounts' : '/customers/user');

        // Show success toast
        toast.success(message || 'Login successful!');
      } else {
        toast.error(res?.data?.error || 'An unexpected error occurred.');
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
        <div className="flex justify-center items-center">
          <Image
            src="/images/new-image/notifications.png"
            height={400}
            width={400}
            alt="login"
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>
        <div className="bg-white border-2 rounded-xl p-6 md:p-8 shadow-lg">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              <p className="text-sm text-center md:text-left">
                Don&apos;t have an account?
                <Link href="/customers/signup">
                  <span className="text-orange-500 hover:underline ml-2">Register</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

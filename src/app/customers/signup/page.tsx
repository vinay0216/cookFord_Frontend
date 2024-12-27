"use client"
import React, { Fragment, useEffect } from 'react';
import Image from 'next/image';
import { userRegister } from '@/api/user';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormInputs {
  username: string;
  email: string;
  userType: string;
  gender: string;
  phone: string;
  password: string;
  latitude: string;
  longitude: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormInputs>();
  const router = useRouter()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude.toString();
          const long = position.coords.longitude.toString();
          setValue('latitude', lat);
          setValue('longitude', long);
        },
        error => {
          console.log(error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by your browser.');
    }
  }, [setValue]);

  const onSubmit = async (data: FormInputs) => {
    console.log(data)
    try {
      const response = await userRegister(data);
      console.log('response==>', response);

      if (response?.status === 201) {
        toast.success(response?.data.message);
        router.push('/coustomers/login')
      } else {
        toast.error(response?.data.error);
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  const onError = (errors: any) => console.log("error", errors);

  function Error({ message }: { message: string }) {
    return (
      <div className="text-sm text-red-600">
        {message}
      </div>
    );
  }

  return (
    <Fragment>
      <div className='grid grid-cols-2 p-6 m-6'>
        <div className='m-4'>
          <Image src={"/images/new-image/notifications.png"} height={500} width={500} alt='signup' />
        </div>
        <div className=''>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Sign up</h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                  Username
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  {...register("username", {
                    required: { value: true, message: "Username Required *" }
                  })}
                  name='username'
                  type='text'
                  placeholder='Username'
                />
                {errors.username && <Error message={errors.username.message!} />}
              </div>
              <div className='mb-4'>
                <label htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-red-500"
                  type="email"
                  placeholder='Email'
                  {...register('email', {
                    required: { value: true, message: 'Email Required *' },
                    pattern: { value: /.+@.+/, message: 'Invalid Email' },
                  })}
                />
                {errors.email && <Error message={errors.email.message!} />}
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">What are you looking for?</legend>
                <div className="mt-4 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="provider"
                      value="provider"
                      {...register("userType")}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="provider" className="block text-sm font-medium leading-6 text-gray-900">
                      I am Looking For a Chef Jobs
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      {...register("userType")}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      I am Looking a Chefs
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className='mt-4'>
                <legend className="text-sm font-semibold leading-6 text-gray-900">Select Gender</legend>
                <div className="mt-4 flex gap-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="female"
                      value="Female"
                      {...register("gender")}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                      Female
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="male"
                      value="Male"
                      {...register("gender")}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                      Male
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className='mb-4 mt-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='mobile'>
                  Mobile no.
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  {...register("phone", { required: { value: true, message: "phone required" } })}
                  name='phone'
                  type='text'
                  placeholder='Mobile No.'
                />
                {errors.phone && <Error message={errors.phone.message!} />}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                  Password
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  {...register("password", { required: true })}
                  name='password'
                  type='password'
                  placeholder='Password'
                />
                {errors.password && <Error message={errors.password.message!} />}
              </div>
              <input
                {...register("latitude")}
                type="hidden"
              />
              <input
                {...register("longitude")}
                type="hidden"
              />
               <div className='flex justify-between items-center'>
              <button 
                className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                type='submit'
              >
                Sign Up
              </button> 
              <p>
                I have an account 
                <Link href="/customers/login">
                  <span className='text-orange-500 hover:underline ml-2'>Login</span>
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;

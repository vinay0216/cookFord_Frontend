"use client"
import React, { Fragment, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { userRegister } from '@/api/user';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'



const Signup: React.FC = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    userType: '',
    gender: '',
    latitude: "",
    longitude:"",
  });


  useEffect(() => {
    // Check if Geolocation API is supported by the browser
    if (navigator.geolocation) {
      // Request current position
      navigator.geolocation.getCurrentPosition(
        position => {
          // On success, update latitude and longitude state in the form data
          setFormData(prevState => ({
            ...prevState,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString()
          }));
        },
        error => {
          // On error, log the error message
          console.log(error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by your browser.');
    }
  }, []);



  const router = useRouter()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log("form data=>", formData)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await userRegister(formData);
    console.log('response==>', response);
   

    if (response?.status === 201) {
      router.push('/coustomers/login');
      toast.success(response.data.message);
    } else {
      toast.error(response.data.error)
    }
  };

  return (
    <Fragment>
      <div className='grid grid-cols-2 p-6 m-6'>
        <div className='m-4'>
          <Image src={"/images/new-image/notifications.png"} height={500} width={500} alt='signup' />
        </div>
        <div className=''>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Sign up</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                  Username
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange} name='username' type='text' placeholder='Username' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange} name='email' type='text' placeholder='Email' />
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">What are you looking for?</legend>
                <div className="mt-4 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="provider"
                      name="userType"
                      value="provider" // Value for the "I am Looking For a Chef Jobs" option
                      onChange={handleChange}
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
                      name="userType"
                      value="user" // Value for the "I am Looking a Chefs" option
                      onChange={handleChange}
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
                      name="gender"
                      value="Female"
                      onChange={handleChange}
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
                      name="gender"
                      value="Male"
                      onChange={handleChange}
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
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange} name='phone' type='text' placeholder='Mobile No.' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                  Password
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  onChange={handleChange} name='password' type='password' placeholder='Password' />
              </div>
             
              <div className=' justify-between'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;

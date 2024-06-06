"use client"
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
// import userLogin from '../../../api/user'
import {userLogin} from '../../../api/user'
// import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import {useDispatch} from 'react-redux'
import {login} from '../../lib/features/authSlice'
import Link from 'next/link'



const Login: React.FC = () => {

  const [formData,setFormData]= useState({
    email:'',
    password:''
  })

  const dispatch = useDispatch()
const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await userLogin(formData)
    console.log("response",res)
    if(res.status === 200) {
      dispatch(login(res.data))
    router.push('/dashboard/ManageAccounts')

    toast.success(res.message)
  }else{
    toast.error(res?.data.message)
  }
  }


  return (
    <Fragment>
      <div className='grid grid-cols-2 p-6 m-6'>
        <div className='m-4'>
            <Image src={"/images/new-image/notifications.png"} height={500} width={500} alt='login'/>
        </div>
        <div className=''>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Login</h1>
            <div>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='Email'>
                    Email
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  onChange={handleChange} name='email' type='email' placeholder='email' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    password
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  onChange={handleChange} name='password' type='password' placeholder='password' />
                </div>
                <div className=' justify-between'>
                  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Login
                  </button>
                 <p>Don't have an accoun't<Link href="signup"> Register </Link> </p>
                </div>
              </form>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
import Image from 'next/image'
import React, { Fragment } from 'react'


const Login = () => {
  return (
    <Fragment>
      <div className='grid grid-cols-2 p-6 m-6'>
        <div className='m-4'>
            <Image src={"/images/new-image/notifications.png"} height={500} width={500} alt='login'/>
        </div>
        <div className=''>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Login</h1>
            <div>
              <form>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                    Username
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    password
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='password' />
                </div>
                <div className=' justify-between'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Login
                  </button>
                 
                </div>
              </form>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
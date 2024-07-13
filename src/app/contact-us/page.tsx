import Image from 'next/image'
import React, { Fragment } from 'react'


const Signup = () => {
  return (
    <Fragment>
      <div className='grid grid-cols-2 p-6 m-6'>
        <div className='m-4 '>
            <Image src={"/images/new-image/contact.png"} height={500} width={500} alt='contect-us'/>
        </div>
        <div className=''>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Contect us</h1>
            <div>
              <form>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                    Username
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                    Mobile no.
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='text'>
                    Email id
                  </label>
                  <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='email' placeholder='Email' />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='text'>
                    Query
                  </label>
                  <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='text'  placeholder='Message'></textarea>
                </div>
                <div className=' justify-between'>
                  <button className='bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Send Query 
                  </button>
                 
                </div>
              </form>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup
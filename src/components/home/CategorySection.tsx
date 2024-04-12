import Image from 'next/image'
import React, { Fragment } from 'react'
import slide from "./../../../public/images/bg-bunner.png"

const CategorySection = () => {
  return (
    <Fragment>
        <div>
            <h1 className='text-2xl'>Category</h1>
            <div className='flex gap-6 p-6'>
            <div>
              <Image src={slide} height={300} width={300} alt=''/>
            </div>
            <div>
              <Image src={slide} height={300} width={300} alt=''/>
            </div>
            <div>
              <Image src={slide} height={300} width={300} alt=''/>
            </div>
            <div>
              <Image src={slide} height={300} width={300} alt=''/>
            </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default CategorySection
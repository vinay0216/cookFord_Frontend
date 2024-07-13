import Image from 'next/image'
import React, { Fragment } from 'react'
import slide from "./../../../public/images/bg-bunner.png"

const CategorySection = () => {

 const data = [
  {
    id:1,
    category:"chef for Home ",
    image:""
  },
  {
    id:2,
    category:"Chef for Hotel ",
    image:""
  },
  {
    id:3,
    category:"Chef for Partes ",
    image:""
  },
  {
    id:4,
    category:"Chef for Restaurant ",
    image:""
  },
  {
    id:5,
    category:"Chef for Company ",
    image:""
  },

  

 ]



  return (
    <Fragment>
   <div>
    <section className="container mx-auto mt-4 sm:p-4 md:p-8 lg:p-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Categories</h2>
        <div className="flex flex-wrap justify-center">
            {data?.map((item, index) => (
                <div className="p-2" key={index}>
                    <div
                        className="px-4 mb-6 bg-cover bg-center"
                        style={{ backgroundImage: `url(/images/logo.jpg)` }}
                    >
                        <div className="bg-white bg-opacity-80 rounded-lg overflow-hidden h-48 w-44 p-6">
                            <h3 className="mt-4 text-xl text-center font-semibold text-gray-800">{item.category}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
</div>

</Fragment>

  )
}

export default CategorySection
import React from 'react'

const Priceplane = () => {
  return (
    <>
     <div className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Discover your perfect service
          </h2>
          <div className="flex justify-center space-x-4 flex-wrap">
            {/* Freelancer Plan */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <h3 className="text-lg font-semibold mb-4">One-time cook</h3>
              <p className="text-gray-600 mb-4">
                Get a professional cook for one-time within 60 minutes.
              </p>
              <ul className="text-gray-600 mb-4">
                <li>Trained & Verified Cooks</li>
                <li>Healthy & Hygienic Food</li>
                <li>Tailored to Your Taste</li>
                <li>Quick Service</li>
              </ul>
              <div className=''>
                <h1>Starting from</h1>
                <h2>₹299/visit</h2>
              </div>
              <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6">
                Buy plan
              </button>
            </div>
            {/* Startup Plan (Most Popular) */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <h3 className="text-lg font-semibold mb-4">Cook for a Month</h3>
              <p className="text-gray-600 mb-4">
                Get a trained & verified monthly cook for your home
              </p>
              <ul className="text-gray-600 mb-4">
                <li>30 Days of Assured Service</li>
                <li>Multi-Cuisine Expert Cooks</li>
                <li>Effortless Replacement</li>
                <li>Quick Service</li>
              </ul>
              <div className=''>
                <h1>Starting from</h1>
                <h2>₹4000/Month</h2>
              </div>
              <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6">
                Buy plan
              </button>
              <p className="text-sm text-gray-500 mt-4">Most popular</p>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <h3 className="text-lg font-semibold mb-4">Chef for Party</h3>
              <p className="text-gray-600 mb-4">
                Professional party chefs to elevate your party experience .
              </p>
              <ul className="text-gray-600 mb-4">
                <li>Multi-Cuisine Professionals</li>
                <li>Customisable Menu</li>
                <li>Prompt Service</li>
                <li>Bartenders, Waiters, etc.</li>
              </ul>
              <div className=''>
                <h1>Starting from</h1>
                <h2>₹2000/visit</h2>
              </div>
              <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6">
                Buy plan
              </button>
            </div>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Priceplane



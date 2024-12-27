import React from 'react';

const Priceplane = () => {
  return (
    <div className="bg-slate-50 py-10">
      <div className="mx-auto p-4 sm:p-6 max-w-6xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Discover your perfect service
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* One-time Cook Plan */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center w-full sm:w-80">
            <h3 className="text-lg font-semibold mb-4">One-time Cook</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Get a professional cook for one-time within 60 minutes.
            </p>
            <ul className="text-gray-600 mb-4 text-sm sm:text-base space-y-2">
              <li>Trained & Verified Cooks</li>
              <li>Healthy & Hygienic Food</li>
              <li>Tailored to Your Taste</li>
              <li>Quick Service</li>
            </ul>
            <div>
              <h1 className="text-sm sm:text-base">Starting from</h1>
              <h2 className="text-lg font-semibold">₹299/visit</h2>
            </div>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6 ">
              Buy plan
            </button>
          </div>
          {/* Cook for a Month Plan */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center sm:p-6 w-full sm:w-80">
            <h3 className="text-lg font-semibold mb-4">Cook for a Month</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Get a trained & verified monthly cook for your home.
            </p>
            <ul className="text-gray-600 mb-4 text-sm sm:text-base space-y-2">
              <li>30 Days of Assured Service</li>
              <li>Multi-Cuisine Expert Cooks</li>
              <li>Effortless Replacement</li>
              <li>Quick Service</li>
            </ul>
            <div>
              <h1 className="text-sm sm:text-base">Starting from</h1>
              <h2 className="text-lg font-semibold">₹4000/Month</h2>
            </div>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6 ">
              Buy plan
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">Most popular</p>
          </div>
          {/* Chef for Party Plan */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center sm:p-6 w-full sm:w-80">
            <h3 className="text-lg font-semibold mb-4">Chef for Party</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Professional party chefs to elevate your party experience.
            </p>
            <ul className="text-gray-600 mb-4 text-sm sm:text-base space-y-2">
              <li>Multi-Cuisine Professionals</li>
              <li>Customisable Menu</li>
              <li>Prompt Service</li>
              <li>Bartenders, Waiters, etc.</li>
            </ul>
            <div>
              <h1 className="text-sm sm:text-base">Starting from</h1>
              <h2 className="text-lg font-semibold">₹2000/visit</h2>
            </div>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6 ">
              Buy plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priceplane;

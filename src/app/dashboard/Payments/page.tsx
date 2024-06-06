import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function page() {
  return (
    <div className='  grid  gap-4 mt-4 mb-4 mx-8'>
     

<div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Designed for business teams like yours
        </h2>
        <div className="flex justify-center space-x-4">
          {/* Freelancer Plan */}
          <div className="bg-white rounded-lg shadow-md p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">Freelancer</h3>
            <p className="text-gray-600 mb-4">
              The essentials to provide your best work for clients.
            </p>
            <ul className="text-gray-600 mb-4">
              <li>5 products</li>
              <li>Up to 1,000 subscribers</li>
              <li>Basic analytics</li>
              <li>48-hour support response time</li>
            </ul>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6">
              Buy plan
            </button>
          </div>

          {/* Startup Plan (Most Popular) */}
          <div className="bg-white rounded-lg shadow-md p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">Startup</h3>
            <p className="text-gray-600 mb-4">
              A plan that scales with your rapidly growing business.
            </p>
            <ul className="text-gray-600 mb-4">
              <li>25 products</li>
              <li>Up to 10,000 subscribers</li>
              <li>Advanced analytics</li>
              <li>24-hour support response time</li>
              <li>Marketing automations</li>
            </ul>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6">
              Buy plan
            </button>
            <p className="text-sm text-gray-500 mt-4">Most popular</p>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-4">
              Dedicated support and infrastructure for your company.
            </p>
            <ul className="text-gray-600 mb-4">
              <li>Unlimited products</li>
              <li>Unlimited subscribers</li>
              <li>Advanced analytics</li>
              <li>1-hour dedicated support response time</li>
              <li>Marketing automations</li>
            </ul>
            <button className="bg-indigo-500 text-white rounded-full py-2 px-6 mt-6">
              Buy plan
            </button>
          </div>
        </div>
      </div>
    </div>




    </div>
    
  );
}
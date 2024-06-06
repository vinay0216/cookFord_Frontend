import React from 'react';

const Howitworks = () => {
    return (
        <div className="p-4 sm:p-8  bg-slate-50 mt-10">
            <h1 className='text-center text-2xl bg-slate-50 rounded-full w-full p-2 mb-8'>How it works</h1>
            <div className='flex flex-col gap-8 sm:flex-row'>
                <div className='rounded-full bg-slate-50 text-center p-8 flex-1'>
                    <h1>Step 1</h1>
                    <p>
                        Download the Cook Ford App and Register yourself
                    </p>
                </div>
                <div className='rounded-full bg-slate-50 text-center p-8 flex-1'>
                    <h1>Step 2</h1>
                    <p>
                        Choose from range of available services
                    </p>
                </div>
                <div className='rounded-full bg-slate-50 text-center p-8 flex-1'>
                    <h1>Step 3</h1>
                    <p>
                        Share your preferences and complete the payment
                    </p>
                </div>
                <div className='rounded-full bg-slate-50 text-center p-8 flex-1'>
                    <h1>Step 4</h1>
                    <p>
                        Get a professionally-trained and trusted cook on time
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Howitworks;

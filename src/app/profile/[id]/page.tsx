"use client"

import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { getUsersProfilbyid } from '@/api/user';
import { setProfilesdata } from '@/app/lib/features/profileDetailSlice';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import ProgresiveLoder from '@/app/ui/loder';
import dynamic from 'next/dynamic';

const FullScreenDialog = dynamic(() => import('@/app/ui/bookmodel'));

const Page: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { isLoading, data } = useAppSelector(state => state.profileDetails);

    console.log("detail profile==>", data)

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getUsersProfilbyid(id);
                dispatch(setProfilesdata(res.data));
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };
        if (id) {
            getData();
        }
    }, [id, dispatch]);

    return (
        <div className='grid grid-cols-3 container  mx-auto'>
            {isLoading ? (
                <ProgresiveLoder />
            ) : (
                <div className='col-span-3 '>
                    <div className="space-y-12 space-x-12">
                        <div className="border-b border-gray-900/10 pb-12 ">
                            <div className="col-span-full grid justify-items-center relative bg-cover bg-center h-60" style={{ backgroundImage: `url(/images/unsplash.jpg)` }}>
                                <div className="mt-40 absolute items-center gap-x-3">
                                    <Avatar sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}>
                                        {/* Avatar content if needed */}
                                    </Avatar>
                                    <label htmlFor="photo" className="block  text-sm font-medium leading-6 text-black bg-opacity-50 p-2 rounded">
                                        {data?.profile.firstname} {data.profile.lastname} <span> 4.5 </span>
                                    </label>
                                    <h3 className=" col-span-full border-b border-gray-900/10 text-center mt-2 text-xl font-semibold text-gray-800">Profile Details</h3>
                                </div>
                            </div>
                            <div className="container mx-auto p-32">

                                <div className="border-b border-gray-900/10  grid grid-cols-3 gap-4">
                                    <div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Age: {data?.profile?.age}</p>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Experience: {data?.profile?.experience}</p>
                                    </div>
                                    <div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">From: {data?.profile?.from}</p>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Food Type: {data?.profile?.food_Type + " , "}</p>
                                    </div>
                                    <div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Full-time Price: {data?.profile?.fulltimeprice}</p>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Language: {data?.profile?.language + " , "}</p>
                                    </div>
                                </div>

                                <div className="col-span-full border-b border-gray-900/10">
                                    <label htmlFor="headline" className="block text-sm font-medium leading-6 text-gray-900">
                                        Headline *
                                    </label>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">{data?.profile?.headline}</p>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                        Work *
                                    </label>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">{data?.profile?.bio}</p>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                        About *
                                    </label>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">{data?.profile?.about}</p>
                                </div>
                                <div className="mt-4 col-span-full">
                                    <h3 className="text-xl font-semibold text-gray-800">Services & Availability</h3>
                                    <div className="col-span-full">
                                        <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                            Morning Availability:
                                        </label>
                                        {data?.profile?.morning?.map((item, index) => {
                                            return (
                                                <div key={index} className='flex'>
                                                    <p  className="mt-3 text-sm leading-6 text-gray-600">{item.time}</p>
                                                </div>
                                            )

                                        })}
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                            Afternoon Availability:
                                        </label>
                                        {data?.profile?.afternoon?.map((item, index) => {
                                            return (
                                                <div  key={index} className='flex'>
                                                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.time}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                                            Evening Availability:
                                        </label>
                                        {data?.profile?.evening?.map((item, index) => {
                                            return (
                                                <div key={index} className='flex'>
                                                    <p  className="mt-3 text-sm leading-6 text-gray-600">{item.time}</p>
                                                </div>
                                            )

                                        })}
                                    </div>
                                </div>

                                <div className='col-span-full mt-4'>
                                    <h3 className="text-xl font-semibold text-gray-800">Experience & Cuisine</h3>
                                    <div className=" border-gray-900/10 mt-4">
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Experience: {data?.profile?.experience} years</p>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Part-time: ₹{data?.profile?.parttimeprice}</p>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Full-time: ₹{data?.profile?.parttimeprice}</p>
                                    </div>

                                    <div className='mt-1 text-sm leading-6 text-gray-600 flex '>
                                        <label className="font-medium text-gray-700">Cuisines:</label>
                                        <div className="text-gray-600 flex">
                                            {data?.profile?.cuisine?.map((item, index) => (
                                                <p key={index}>{item + " , "}</p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='mt-1 text-sm leading-6 text-gray-600 flex  '>
                                        <label className="font-medium text-gray-700">Food Type:</label>
                                        <div className="text-gray-600 flex">
                                            {data?.profile?.food_Type?.map((item, index) => (
                                                <p key={index}>{item + " , "}</p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='mt-1 text-sm leading-6 text-gray-600 flex '>
                                        <label className="font-medium text-gray-700">Languages:</label>
                                        <div className="text-gray-600 flex">
                                            {data?.profile?.language?.map((item, index) => (
                                                <p key={index}>{item + " ,"}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>



                                <div className="border-b border-gray-900/10 pb-12 mt-4">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Phone: {data?.phone}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Gender: {data?.gender}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Email: {data?.email}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                                </div>

                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Always let you know about important changes, but you pick what else you want to hear about.
                                    </p>
                                </div>

                                <button
                                type="submit"
                                onClick={handleClickOpen}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Get Trial
                            </button>
                            </div>


                            
                        </div>

                    </div>
                </div>
            )}

            <FullScreenDialog open={open} setOpen={setOpen} />
        </div>


    );
};

export default Page;

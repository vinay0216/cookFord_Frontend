"use client"
import { getUsersProfilbyid } from '@/api/user'
import { setProfilesdata } from '@/app/lib/features/profileDetailSlice'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { useParams } from 'next/navigation'
import React, { ChangeEvent, useEffect, useState } from 'react'
import ProgresiveLoder from "./../../ui/loder"
import Image from 'next/image'


const Page: React.FC = () => {

    // const [FormData,setFormData] = useState({})


    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setFormData({...FormData,[e.target.name]:e.target.value})
    // }

    const dispatch = useAppDispatch()

    const { id } = useParams()

    useEffect(() => {
        async function getData() {
            const res = await getUsersProfilbyid(id)
            dispatch(setProfilesdata(res.data))
        }
        getData()
    }, [id])

    const { isLoading, data } = useAppSelector(state => state.profileDetails)

    console.log("useSelectordata==>", data)

    return (
        <>
            <div className='grid grid-cols-4 container mx-auto p-8'>
                {/* left section */}
                {isLoading ? <>
                    <ProgresiveLoder />
                </> :
                    <>
                        <div className=' col-span-3  p-10 '>
                            <div className="space-y-12 space-x-12">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="col-span-full grid justify-items-center relative bg-cover bg-center h-40" style={{ backgroundImage: `url(/images/unsplash.jpg)` }}>
                                        <div className="mt-28 absolute  items-center gap-x-3">
                                            <Avatar sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}>
                                            </Avatar>
                                            {/* <button
                                                type="button"
                                                className=" absolute bottom-0 left-0 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Change
                                            </button> */}
                                            <label htmlFor="photo" className="block  mb-10 text-sm font-medium leading-6 text-black bg-opacity-50 p-2 rounded">
                                                {data.username}  {data.profile.total_rating}
                                            </label>
                                        </div>

                                    </div>

                                    <div className="border-b border-gray-900/10 pt-24 pb-8 grid grid-cols-3 gap-4">
                                        <div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">Age:{data.profile.age}</p>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">Experince:{data.profile.experience}</p>
                                        </div>
                                        <div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">From:{data.profile.from}</p>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">food_Type:{data.profile.food_Type}</p>
                                        </div>
                                        <div>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">fulltimeprice:{data.profile.fulltimeprice}</p>
                                            <p className="mt-3 text-sm leading-6 text-gray-600">language:{data.profile.language}</p>
                                        </div>


                                    </div>
                                    <div className="col-span-full border-b-1 border-b-slate-900">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                            Headline *
                                        </label>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">{data?.profile?.headline}</p>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                            work *
                                        </label>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">{data?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Phone :{data.phone}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Gender : {data.gender}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Email : {data.email}</p>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                                </div>
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        always let you know about important changes, but you pick what else you want to hear about.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {/* right section */}
                <div className='col-span-1'>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Publish Profile
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Delete Profile
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
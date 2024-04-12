"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter()
    return (
        <>
            <nav className="flex justify-around bg-black text-white p-4  top-0 left-0 right-0">
                <div>
                    <h1 className="text-3xl font-bold text-white-900">
                        <a href="/">
                            logo
                        </a>
                    </h1>
                </div>
                <ul className='flex justify-center gap-8 mt-1'>
                    <li className="relative group">
                        <button className='focus:outline-none'>Services</button>
                        <ul className='dropdown-menu absolute hidden bg-white shadow-md rounded mt-2 py-1 group-hover:block'>

                            <li>
                                <Link href={`/provider/${"cook-for-Monthly-basis"}`} className="block w-52 px-4  py-2 text-gray-800 hover:bg-gray-200">cook for Monthly basis </Link>
                            </li>


                            <li>
                                <Link href={`/provider/${"cook-for-one-time"}`} className="block w-52 px-4  py-2 text-gray-800 hover:bg-gray-200">cook for one time  </Link></li>
                            <li>
                                <Link href={`/provider/${"cook-for-occasion"}`} className="block w-52 px-4  py-2 text-gray-800 hover:bg-gray-200">cook for occasion </Link></li>
                        </ul>
                    </li>
                    <li className="">Blog</li>
                    <li className=""><a href="/contact-us">Contact</a></li>
                    <li className=""><a href="/about">About</a></li>
                </ul>

                <div className=' flex gap-3'>
                    <button type='button' onClick={() => router.push("/coustomers/login")} className='border-collapse'>login </button>
                    <button type='button' onClick={() => router.push("/coustomers/signup")} className='border-1 '>sign up </button>
                    <button type='button' onClick={() => router.push("/dashboard")} className='border-1 '>Become a Cook </button>
                </div>

            </nav>
        </>
    )
}

export default Header
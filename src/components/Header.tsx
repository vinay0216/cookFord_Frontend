'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';

import { logout } from '../app/lib/features/authSlice';


const Header = () => {
    // const token = localStorage.getItem('user');

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dispatch = useAppDispatch()
    const isLogin =  useAppSelector((state) => state.auth.isAuthenticated)
   
    const router = useRouter()
    const handelLogout=()=>{
        dispatch(logout());
       router.push('/coustomers/login')
       handleClose()
    }


    

    return (
        <>
            <nav className="flex justify-around bg-white text-black  top-0 left-0 right-0 sticky z-50">
                <div className='bg-transparent  '>
                    <Link href="/">
                        <Image  className='mix-blend-multiply bg-transparent;'  src={"/images/logo8.png"} height={60} width={60} alt="logo"/>
                    </Link>
                </div>
                <ul className='flex justify-center gap-8 mt-4 '>
                    <li className="relative group">
                        <button className='focus:outline-none hover: '>Services</button>
                        <ul className='dropdown-menu absolute hidden bg-white shadow-md rounded mt-2 py-1 group-hover:block'>
                            <li>
                                <Link href={`/provider/${"cook-for-Monthly-basis"}`} className="block w-52 px-4  py-2 text-gray-800 hover:bg-gray-200">cook for Monthly basis </Link>
                            </li>
                            <li>
                                <Link href={`/provider/${"cook-for-one-time"}`} className="block w-52 px-4  py-2 text-gray-800 hover:bg-gray-200">cook for one time  </Link>
                            </li>
                            <li>
                                <Link href={`/provider/${"cook-for-occasion"}`} className="block w-52 px-4  py-2 text-gray-800 hover:bg-gray-200">cook for occasion </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="">
                        <Link href = "/coustomers/signup">Get a chefs job</Link>
                    </li>
                    <li className="">
                        <Link href="/contact-us">Find Chefs</Link>
                    </li>
                </ul>
                {!isLogin ?
                    <div className=' flex gap-3 mt-4'>
                        <Link href="/coustomers/login">
                            <button type='button' className='border-collapse'>login </button>
                        </Link>
                    </div>
                     : 
                    <>
                        <Button
                            id="basic-button"
                            className='text-black' 
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            size='medium'
                            startIcon={<PermIdentityIcon />}
                            endIcon={<ArrowDropDownOutlinedIcon />}
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            My Profile
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Link href={"/dashboard/profile"}>
                                <MenuItem >My Profile</MenuItem>
                            </Link>
                            <Link href={"/dashboard/profile"}>
                                <MenuItem >Settings</MenuItem>
                            </Link>
                            <MenuItem onClick={handelLogout}>Logout</MenuItem>
                        </Menu>
                    </>
             } 

            </nav>
        </>
    )
}

export default Header
'use client'

import Link from 'next/link';
import { useEffect, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { logout } from '@/app/lib/features/authSlice';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isLogin, setIsLogin] = useState<string | null>(null);
    // const isLogin = useAppSelector(state => state.auth.isAuthenticated);
    
    const dispatch = useAppDispatch();
    const router = useRouter();

    const open = Boolean(anchorEl);

    useEffect(() => {
        // Ensure code runs only on the client side
        const accessToken = localStorage.getItem("accessToken");
        setIsLogin(accessToken);
        console.log("isLogin=>", accessToken);
      }, []);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // dispatch(logout());
        localStorage.clear()
        router.push('/coustomers/login');
        handleClose();
    };

    return (
        <nav className="flex justify-around bg-white text-black top-0 left-0 right-0 sticky  z-50">
            <div className='bg-transparent'>
                <Link href="/">
                    <Image
                        className='mix-blend-multiply bg-transparent'
                        src={"/images/logo8.png"}
                        height={60}
                        width={60}
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className='flex justify-center gap-8 mt-4'>
                <li className="relative group">
                    <button className='focus:outline-none'>Services</button>
                    <ul className='dropdown-menu absolute hidden bg-white shadow-md rounded mt-2 py-1 group-hover:block'>
                        <li>
                            <Link href="/provider/cook-for-Monthly-basis" className="block w-52 px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Cook for Monthly Basis
                            </Link>
                        </li>
                        <li>
                            <Link href="/provider/cook-for-one-time" className="block w-52 px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Cook for One Time
                            </Link>
                        </li>
                        <li>
                            <Link href="/provider/cook-for-occasion" className="block w-52 px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Cook for Occasion
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/coustomers/signup">Get a Chefs Job</Link>
                </li>
                <li>
                    <Link href="/contact-us">Find Chefs</Link>
                </li>
            </ul>
            {!isLogin ? (
                <div className='flex gap-3 mt-4'>
                    <Link href="/coustomers/login">
                        <button type='button' className='border-collapse'>Login</button>
                    </Link>
                </div>
            ) : (
                <>
                    <Button
                        id="profile-button"
                        className='text-black'
                        aria-controls={open ? 'profile-menu' : undefined}
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
                        id="profile-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'profile-button',
                        }}
                    >
                        <Link href="/dashboard/ManageAccounts">
                            <MenuItem>My Profile</MenuItem>
                        </Link>
                        <Link href="/dashboard/ManageAccounts">
                            <MenuItem>Settings</MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
            )}
        </nav>
    );
}

export default Header;

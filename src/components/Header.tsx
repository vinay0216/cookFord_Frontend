'use client';

import Link from 'next/link';
import { useEffect, useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLogin } from '@/app/context/LoginContext';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user_id, setUserid] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isLogin, setLoginStatus } = useLogin();
  const router = useRouter();
  const open = Boolean(anchorEl);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_id');
    setUserid(storedUser);
    setAnchorEl(null);
  }, []);


  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoginStatus(false);
    localStorage.clear();
    router.push('/customers/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-2 py-1 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo8.png"
            height={50}
            width={50}
            alt="logo"
            className="mix-blend-multiply"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-orange-500"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          <li className="relative group">
            <button className="focus:outline-none text-orange-500 hover:text-orange-700 font-bold">
              Services
            </button>
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded  py-1 border border-orange-200">
              <li>
                <Link href="/provider/cook-for-Monthly-basis" className="block w-52 px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-700">
                  Cook for Monthly Basis
                </Link>
              </li>
              <li>
                <Link href="/provider/cook-for-one-time" className="block w-52 px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-700">
                  Cook for One Time
                </Link>
              </li>
              <li>
                <Link href="/provider/cook-for-occasion" className="block w-52 px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-700">
                  Cook for Occasion
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/customers/signup" className="text-orange-500 hover:text-orange-700 font-bold">
              Get a Chefs Job
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-orange-500 hover:text-orange-700 font-bold">
              Find Chefs
            </Link>
          </li>
        </ul>

        {/* Login/Profile */}
       
          <div className="hidden lg:flex items-center gap-2">
              <Button
                id="profile-button"
                className="text-orange-500 hover:text-orange-700"
                aria-controls={open ? 'profile-menu' : undefined}
                aria-haspopup="true"
                size="medium"
                startIcon={<PermIdentityIcon />}
                endIcon={<ArrowDropDownOutlinedIcon />}
                aria-expanded={open ? 'true' : undefined}
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  console.log("Dropdown button clicked"); // Debugging
                  console.log("anchorEl:", event.currentTarget); // Debugging
                  handleClick(event);
                }}
              >
                My Profile
              </Button>
              <AccountBalanceWalletIcon className="text-orange-500" />
              <span className="p-2 font-bold text-orange-500">₹ 50</span>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'profile-button',
                }}
              >
                <Link href={`/profile/${user_id}`}>
                  <MenuItem className="text-orange-500 hover:text-orange-700">
                    My Profile
                  </MenuItem>
                </Link>
                <Link href="/dashboard/ManageAccounts">
                  <MenuItem className="text-orange-500 hover:text-orange-700">
                    Settings
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleLogout} className="text-orange-500 hover:text-orange-700">
                  Logout
                </MenuItem>
              </Menu>
          </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/provider/cook-for-Monthly-basis" className="block text-gray-800 hover:text-orange-700">
                Cook for Monthly Basis
              </Link>
            </li>
            <li>
              <Link href="/provider/cook-for-one-time" className="block text-gray-800 hover:text-orange-700">
                Cook for One Time
              </Link>
            </li>
            <li>
              <Link href="/provider/cook-for-occasion" className="block text-gray-800 hover:text-orange-700">
                Cook for Occasion
              </Link>
            </li>
            <li>
              <Link href="/customers/signup" className="text-orange-500 hover:text-orange-700 font-bold">
                Get a Chefs Job
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-orange-500 hover:text-orange-700 font-bold">
                Find Chefs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

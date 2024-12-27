import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Twitter, WhatsApp, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-orange-50 p-6">
      <div className="container mx-auto">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo1.png"
              className="mix-blend-multiply"
              height={150}
              width={150}
              alt="logo"
            />
          </div>

          {/* Links Section 1 */}
          <div>
            <h2 className="text-black font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-black hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:text-orange-500">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div>
            <h2 className="text-black font-semibold mb-2">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-black hover:text-orange-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-and-condition" className="text-black hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-black hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-black hover:text-orange-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-black hover:text-orange-500">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-black font-semibold mb-2">Follow Us</h2>
            <ul className="flex gap-4 text-orange-500">
              <li>
                <Facebook className="hover:text-orange-700 cursor-pointer" />
              </li>
              <li>
                <Instagram className="hover:text-orange-700 cursor-pointer" />
              </li>
              <li>
                <Twitter className="hover:text-orange-700 cursor-pointer" />
              </li>
              <li>
                <YouTube className="hover:text-orange-700 cursor-pointer" />
              </li>
              <li>
                <WhatsApp className="hover:text-orange-700 cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-black">
            © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

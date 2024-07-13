import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Twitter, WhatsApp, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-white  p-6">
                <div >
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='text-2xl text-black text-center'>
                            <Image src={"/images/logo1.png"} className='mix-blend-multiply' height={150} width={150} alt="logo" />
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li><Link href="/" className='hover:text-orange-500'>Home</Link></li>
                                <li ><Link href="/about" className='hover:text-orange-500'>About </Link></li>
                                <li><Link href="/servies" className='hover:text-orange-500'>Services</Link></li>
                            </ul>
                        </div>

                        <div className='text-black'>
                            <ul>
                                <li><Link href ="/contact" className='hover:text-orange-500' > Contact</Link></li>
                                <li><Link href ="/Terms & Condition" className='hover:text-orange-500' > Terms & Condition</Link></li>
                                <li><Link href ="/Privacy Policy" className='hover:text-orange-500' > Privacy Policy</Link></li>
                                <li><Link href ="/FAQ" className='hover:text-orange-500' > FAQ</Link></li>
                                <li><Link href ="/Careers" className='hover:text-orange-500' > Careers</Link></li>
                            </ul>
                        </div>
                        <div className=''>
                            <h1>Social link</h1>
                            <ul className='flex'>
                                <li>
                                    <Facebook />
                                </li>
                                <li>
                                    <Instagram/>
                                </li>
                                <li>
                                    <Twitter/>
                                    </li>
                                <li>
                                    <YouTube/>
                                </li>
                                <li>
                                    <WhatsApp/>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="copyright text-center text-black ">
                                <p>Copyright © 2024 . All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black  p-6">
                <div >
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='text-2xl text-white text-center'>
                            <p >Logo</p>
                        </div>
                        <div className='text-white'>
                            <ul>
                                <li>home</li>
                                <li>about</li>
                                <li>services</li>
                                <li>portfolio</li>
                                <li>blog</li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <ul>
                                <li>contact</li>
                                <li>terms & condition</li>
                                <li>privacy policy</li>
                                <li>FAQ</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='text-white'>
                            <h1>Social link</h1>
                            <ul>
                                <li>facebook</li>
                                <li>instagram</li>
                                <li>twitter</li>
                                <li>youtube</li>
                                <li>whatsapp</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="copyright text-center text-white ">
                                <p>Copyright © 2020 . All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
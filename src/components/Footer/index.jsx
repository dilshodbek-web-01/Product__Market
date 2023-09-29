import React from 'react';

const index = () => {
    return (
        <>
            <div className='bg-black text-white mt-16'>
                <div className="container">
                    <div className="footer py-14 flex items-start justify-between">

                        <ul className="exclusive list-none">
                            <li className='font-bold text-2xl mb-4'>Exclusive</li>
                            <li className='font-medium text-xl mb-4'>Subscribe</li>
                            <li className='mb-3'>Get 10% off your first order</li>
                            <li>
                                <label htmlFor="" className='relative'>
                                    <input type="email" placeholder='Enter your email' className='w-[217px] bg-black indent-3 text-gray-950  py-3 border rounded' />
                                    <span className='absolute right-4 top-[1px] cursor-pointer'> 
                                        <i class="fa-regular fa-paper-plane"></i>
                                    </span>
                                </label>
                            </li>
                        </ul>

                        <ul className="exclusive list-none">
                            <li className='font-medium text-xl mb-4'>Support</li>
                            <li className='mb-3'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
                            <li className='mb-3'>exclusive@gmail.com</li>
                            <li className=''>+998901234567</li>
                        </ul>

                        <ul className="exclusive list-none">
                            <li className='font-medium text-xl mb-4'>Account</li>
                            <li className='mb-3'>My Account</li>
                            <li className='mb-3'>Login / Register</li>
                            <li className='mb-3'>Cart</li>
                            <li className='mb-3'>Wishlist</li>
                            <li className=''>Shop</li>
                        </ul>

                        <ul className="exclusive list-none">
                            <li className='font-medium text-xl mb-4'>Quick Link</li>
                            <li className='mb-3'>Privacy Policyt</li>
                            <li className='mb-3'>Terms Of Use</li>
                            <li className='mb-3'>FAQ</li>
                            <li className='mb-3'>Contact</li>
                        </ul>

                        <ul className="exclusive list-none">
                            <li className='font-medium text-xl mb-4'>Download App</li>
                            <li className='mb-3 text-xs font-medium text-gray-400'>Save $3 with App New User Only</li>
                            <li className='mb-3 flex items-center gap-3'>
                                <img src="QrCode.png" className='cursor-pointer' alt="" />
                                <div className=''>
                                    <img src="appstore.png" className='cursor-pointer' alt="" />
                                    <img src="playstore.png" className='cursor-pointer pt-3' alt="" />
                                </div>
                            </li>
                            <li className='mt-6 flex items-center justify-between'>
                                <img src="Icon-Facebook.png" className='cursor-pointer' alt="" />
                                <img src="Icon-Twitter.png" className='cursor-pointer' alt="" />
                                <img src="Icon-Instagram.png" className='cursor-pointer' alt="" />
                                <img src="Icon-Linkedin.png" className='cursor-pointer' alt="" />
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
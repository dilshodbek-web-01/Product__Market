import React from 'react';

const index = () => {
    return (
        <>
            <div className="container">
                <div className="sign__up--content flex items-center justify-between mt-14 mb-10">
                    <div className='w-[705px]'>
                        <img src="SideImage.png" alt="" />
                    </div>

                    <div className="content">
                        <h2 className='font-medium text-4xl'>Create an account</h2>
                        <p className='mt-6'>Enter your details below</p>
                        <form action="#" className='mt-12'>
                            <label htmlFor="#">
                                <input type="text" placeholder='Name' className='w-full outline-none' />
                                <hr className='mt-2 mb-10' />
                            </label>

                            <label htmlFor="#">
                                <input type="text" placeholder='Email or Phone Number' className='w-full outline-none' />
                                <hr className='mt-2 mb-10' />
                            </label>

                            <label htmlFor="#">
                                <input type="text" placeholder='Password' className='w-full outline-none' />
                                <hr className='mt-2 mb-10' />
                            </label>

                            <button className='bg-green-700 text-white font-medium w-full py-4 rounded'>Create Account</button>

                            <button className='w-full py-4 rounded border mt-4'>Sign up with Google</button>

                            <p className='text-center mt-[34px]'>Already have account? <a href="#" className='font-medium'>Log in</a></p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
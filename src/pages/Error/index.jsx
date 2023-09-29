import React from 'react';
import { Link } from "react-router-dom";
import './style.scss'

const index = () => {
    return (
        <>
            <div className="container">
                <h3 className='mt-16 text-sm text-gray-500'>Home / <strong className='text-black font-normal'>404 Error</strong></h3>
                <div className="not__found text-center">
                    <h1 className='font-medium mb-10 mt-14 text-[110px] leading-[115px]'>404 Not Found</h1>
                    <p className='mb-20'>Your visited page not found. You may go home page.</p>
                    <Link to="/" className='border w-[254px] py-4 px-12 bg-green-700 text-white font-medium'>Back to home page</Link>
                </div>
            </div>
        </>
    );
};

export default index;
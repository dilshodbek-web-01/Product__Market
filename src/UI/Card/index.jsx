import React from 'react';
import "./style.scss"

const index = () => {
    return (
        <>
            <div className="card w-[270px] h-[350px]">

                <div className="card__image--body rounded w-[270px] h-[250px] bg-slate-100 relative">
                    <div className='flex justify-between z-30 p-3'>
                        <span className='sale w-14 h-7 bg-red-600 text-white rounded text-center'>-40%</span>
                        <div className=''>
                            <i class="fa-regular fa-heart p-3 w-10 bg-white rounded-3xl block cursor-pointer"></i>
                            <i class="fa-regular fa-eye p-3 w-10 mt-2 bg-white rounded-3xl cursor-pointer"></i>
                        </div>
                    </div>
                    <img className='rounded absolute top-14 left-16' src="canon.png" alt="image" />
                </div>

                <h3 className='card-title font-medium mt-4'>ASUS FHD Gaming Laptop</h3>
                <span className='flex my-2'>
                    <p className='card-price text-red-600 font-medium'>$120</p>
                    <del className='card-price text-gray-400 font-medium ms-4'>$160</del>
                </span>

                <span className='flex items-center'>
                    <i class="fa-regular fa-star cursor-pointer"></i>
                    <i class="fa-regular fa-star cursor-pointer"></i>
                    <i class="fa-regular fa-star cursor-pointer"></i>
                    <i class="fa-regular fa-star cursor-pointer"></i>
                    <i class="fa-regular fa-star cursor-pointer"></i>
                    <p className='star-count ms-3 text-gray-400 font-semibold text-sm'>(88)</p>
                </span>

            </div>
        </>
    );
};

export default index;
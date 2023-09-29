import React from 'react';
import { NavLink } from "react-router-dom";

const index = () => {
    return (
        <>
            <div className="navbar__up bg-black ">
                <div className='container h-12 flex items-center justify-between'>
                    <div></div>

                    <h1 className='text-neutral-300 text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className='text-white underline ms-2' href="#">ShopNow</a></h1>

                    <div className="navbar__up--lang flex">
                        <p className='text-neutral-300 text-sm'>English</p>
                        <select className='bg-black text-white' name="" id=""></select>
                    </div>
                </div>
            </div>

            <header>
                <div className="container">
                    <div className="nav flex items-center justify-between pt-8 pb-2">
                        <h2 className='text-2xl font-bold'>Exclusive</h2>

                        <ul className="nav__list flex items-center justify-between w-1/3">

                            <li className='text-base'>
                                <NavLink className={({ isActive }) => isActive ? 'font-medium' : 'font-normal'} to="/">Home</NavLink>
                            </li>

                            <li className='text-base'>
                                <NavLink className={({ isActive }) => isActive ? 'font-medium' : 'font-normal'} to="/contact">Contact</NavLink>
                            </li>

                            <li className='text-base'>
                                <NavLink className={({ isActive }) => isActive ? 'font-medium' : 'font-normal'} to="/about">About</NavLink>
                            </li>

                            <li className='text-base'>
                                <NavLink className={({ isActive }) => isActive ? 'font-medium' : 'font-normal'} to="/sign_up">Sign Up</NavLink>
                            </li>

                        </ul>

                        <div className="nav__end">
                            <label htmlFor="">
                                <input className='w-60 text-xs py-2 ps-4 pe-3 bg-slate-100 rounded' type="search" placeholder='What are you looking for?' />
                                <span className='position: relative right-8'>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </label>

                            <span className='mr-4 cursor-pointer'>
                                <i class="fa-regular fa-heart"></i>
                            </span>

                            <span className='mr-4 cursor-pointer'>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </span>

                            <span className='cursor-pointer'>
                                <i class="fa-regular fa-user"></i>
                            </span>

                        </div>

                    </div>
                    <hr />
                </div>
            </header>
        </>
    );
};

export default index;

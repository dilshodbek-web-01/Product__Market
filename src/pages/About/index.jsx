import React from 'react';

const index = () => {

    return (
        <>
            <div className="about">
                <div className="container">
                    <h3 className='mt-16 text-sm text-gray-500'>Home / <strong className='text-black font-normal'>About</strong></h3>

                    <div className='our_story mt-10 flex items-center justify-between'>
                        <div className="content w-[525px]">
                            <h1 className='font-semibold text-[54px] leading-[64px] mb-12'>Our Story</h1>
                            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                                <br />
                                <br />
                                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                            </p>
                        </div>

                        <div className='bg-pink-400 rounded w-[585px] h-[609px] flex items-end justify-center'>
                            <img src="person_1.png" className='ml-44' alt="" />
                        </div>
                    </div>

                    <div className="icon__cards flex items-center justify-between mt-32">

                        <div className="card cursor-pointer w-[270px] h-[230px] rounded border text-center pt-[30px] hover:bg-blue-500 hover:text-white ">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <img src="Icon_shop.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-bold text-[32px] leading-[30px] mt-6 mb-2'>10.5k</h3>
                            <p className=''>Sallers active our site</p>
                        </div>

                        <div className="card cursor-pointer w-[270px] h-[230px] rounded border text-center pt-[30px] hover:bg-blue-500 hover:text-white ">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <i class="fa-solid fa-dollar-sign text-white border rounded-full p-2"></i>
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-bold text-[32px] leading-[30px] mt-6 mb-2'>33k</h3>
                            <p className=''>Mopnthly Produduct Sale</p>
                        </div>

                        <div className="card cursor-pointer w-[270px] h-[230px] rounded border text-center pt-[30px] hover:bg-blue-500 hover:text-white ">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <img src="Icon-Shoppingbag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-bold text-[32px] leading-[30px] mt-6 mb-2'>45.5k</h3>
                            <p className=''>Customer active in our site</p>
                        </div>

                        <div className="card cursor-pointer w-[270px] h-[230px] rounded border text-center pt-[30px] hover:bg-blue-500 hover:text-white ">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <img src="Icon-Moneybag.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-bold text-[32px] leading-[30px] mt-6 mb-2'>25k</h3>
                            <p className=''>Anual gross sale in our site</p>
                        </div>

                    </div>

                    <div className="person__cards flex items-center justify-between mt-32">

                        <div className="card w-[370px] h-[564px]">
                            <div className="card__body w-[370px] h-[430px] flex items-center justify-center pt-[38px] bg-slate-100 rounded">
                                <img src="person_2.png" alt="" />
                            </div>
                            <h2 className='font-medium text-[32px] leading-[30px] mt-7'>Tom Cruise</h2>
                            <p className='mt-2'>Founder & Chairman</p>
                            <div className='mt-8 w-1/3 flex items-center justify-between'>
                                <i class="fa-brands fa-square-twitter fa-xl cursor-pointer"></i>
                                <i class="fa-brands fa-instagram fa-xl cursor-pointer"></i>
                                <i class="fa-brands fa-linkedin-in fa-xl cursor-pointer"></i>
                            </div>
                        </div>

                        <div className="card w-[370px] h-[564px]">
                            <div className="card__body w-[370px] h-[430px] flex items-center justify-center pt-[38px] bg-slate-100 rounded">
                                <img src="person_2.png" alt="" />
                            </div>
                            <h2 className='font-medium text-[32px] leading-[30px] mt-7'>John Wick</h2>
                            <p className='mt-2'>Managing Director</p>
                            <div className='mt-8 w-1/3 flex items-center justify-between'>
                                <i class="fa-brands fa-square-twitter fa-xl cursor-pointer"></i>
                                <i class="fa-brands fa-instagram fa-xl cursor-pointer"></i>
                                <i class="fa-brands fa-linkedin-in fa-xl cursor-pointer"></i>
                            </div>
                        </div>

                        <div className="card w-[370px] h-[564px]">
                            <div className="card__body w-[370px] h-[430px] flex items-center justify-center pt-[38px] bg-slate-100 rounded">
                                <img src="person_1c.png" alt="" />
                            </div>
                            <h2 className='font-medium text-[32px] leading-[30px] mt-7'>Will Smith</h2>
                            <p className='mt-2'>Product Desinger</p>
                            <div className='mt-8 w-1/3 flex items-center justify-between'>
                                <i class="fa-brands fa-square-twitter fa-xl cursor-pointer"></i>
                                <i class="fa-brands fa-instagram fa-xl cursor-pointer"></i>
                                <i class="fa-brands fa-linkedin-in fa-xl cursor-pointer"></i>
                            </div>
                        </div>

                    </div>

                    <div className="three__icon mt-32 mb-14 flex items-center justify-evenly">

                        <div className="three__icon--one text-center">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <img src="icon-delivery.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-semibold text-xl mt-6 mb-2'>FREE AND FAST DELIVERY</h3>
                            <p className='text-sm'>Free delivery for all orders over $140</p>
                        </div>

                        <div className="three__icon--one text-center">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <img src="icon-customer_service.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-semibold text-xl mt-6 mb-2'>24/7 CUSTOMER SERVICE</h3>
                            <p className='text-sm'>Friendly 24/7 customer support</p>
                        </div>

                        <div className="three__icon--one text-center">
                            <div className='flex items-center justify-center'>
                                <div className='w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center'>
                                    <div className='w-14 h-14 flex items-center justify-center bg-black rounded-full'>
                                        <img src="icon-secure.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <h3 className='font-semibold text-xl mt-6 mb-2'>MONEY BACK GUARANTEE</h3>
                            <p className='text-sm'>We reurn money within 30 days</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default index;
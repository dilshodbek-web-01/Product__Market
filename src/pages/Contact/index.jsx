import React from "react";
import Button from '../../UI/Button'

const index = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <h3 className="mt-16 text-sm text-gray-500">
                        Home / <strong className="text-black font-normal">Contact</strong>
                    </h3>

                    <div className="write mt-20 mb-14 flex items-center justify-between">
                        <div className="content shadow-2xl w-[340px] h-[457px] px-[35px] pt-12">
                            <div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white">
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                    <h4 className="font-medium ms-4">Call To Us</h4>
                                </div>
                                <p className="text-sm mt-6">We are available 24/7, 7 days a week.</p>
                                <p className="text-sm mt-4">Phone: +998901234567</p>
                            </div>
                            <hr className="my-7" />

                            <div>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white">
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <h4 className="font-medium ms-4">Write To US</h4>
                                </div>
                                <p className="text-sm mt-6">Fill out our form and we will contact you within 24 hours.</p>
                                <p className="text-sm mt-4">Emails: customer@exclusive.com</p>
                                <p className="text-sm mt-4">Emails: support@exclusive.com</p>
                            </div>
                        </div>

                        <div className="form__inputs shadow-2xl w-[800px] h-[457px] py-10 px-[30px]">
                            <form action="#">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="#">
                                        <input type="text" placeholder="Your Name *" className="bg-slate-100 w-[235px] h-[50px] rounded ps-4" />
                                    </label>

                                    <label htmlFor="#">
                                        <input type="text" placeholder="Your Email *" className="bg-slate-100 w-[235px] h-[50px] rounded ps-4" />
                                    </label>

                                    <label htmlFor="#">
                                        <input type="text" placeholder="Your Phone *" className="bg-slate-100 w-[235px] h-[50px] rounded ps-4" />
                                    </label>
                                </div>

                                <label htmlFor="#">
                                    <input type="text" placeholder="Your Massage" className="bg-slate-100 w-full h-[207px] mt-8 rounded ps-4" />
                                </label>

                                <div className="flex justify-end mt-8">
                                    <Button />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;

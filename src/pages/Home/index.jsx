import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Carousel } from 'antd';
import { useEffect } from 'react';
import Card from '../../UI/Card'
import Button from '../../UI/Button'
import CategoryCard from '../../UI/Card/CategoryCard';

// ==================== And Design Menu content
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />),
    getItem('Navigation Four', 'sub5', <SettingOutlined />),
    getItem('Navigation five', 'sub6', <SettingOutlined />),
    getItem('Navigation Six', 'sub7', <SettingOutlined />),
    getItem('Navigation Seven', 'sub8', <SettingOutlined />),
    getItem('Navigation Nine', 'sub9', <SettingOutlined />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const index = () => {

    const [days, setDays] = useState(new Date().getDate())
    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())

    useEffect(() => {
        setInterval(() => {
            setSeconds(new Date().getSeconds())
        }, 1000)
        setMinutes(new Date().getMinutes())
        setHours(new Date().getHours())
        setDays(new Date().getDate())
    }, [days, hours, minutes, seconds])

    // And Design Menu Function

    // const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <>
            <div className="home">
                <div className="container" >

                    <div className="home__intro flex">
                        <Menu
                            className='pt-3'
                            mode="inline"
                            // openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            style={{
                                width: 256,
                            }}
                            items={items}
                        />

                        <div className="w-4/5 py-7 ps-7">
                            <Carousel autoplay>
                                <div>
                                    <img src="image.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="image.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="image.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="image.jpg" alt="" />
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="home__mostSales mt-24">

                        <div className='home__mostSales--up flex items-center justify-between'>

                            <div className='flex'>

                                <div className='text'>
                                    <div className='flex items-center'>
                                        <div className='w-5 h-10 rounded bg-green-700'></div>
                                        <p className='text-green-700 font-semibold ms-3'>Today`s</p>
                                    </div>
                                    <h2 className='text-4xl font-semibold mt-4'>Most Sales</h2>
                                </div>

                                <div className="time flex justify-between w-72 mt-8 ms-32">

                                    <div className='time__days'>
                                        <p className='font-semibold'>Days</p>
                                        <p className='text-4xl font-bold'>{days}</p>
                                    </div>

                                    <span className='mt-9'>
                                        <div className='bg-green-700 rounded w-1 h-1'></div>
                                        <div className='bg-green-700 rounded w-1 h-1 mt-2'></div>
                                    </span>

                                    <div className='time__days'>
                                        <p className='font-semibold'>Hours</p>
                                        <p className='text-4xl font-bold'>{hours}</p>
                                    </div>

                                    <span className='mt-9'>
                                        <div className='bg-green-700 rounded w-1 h-1'></div>
                                        <div className='bg-green-700 rounded w-1 h-1 mt-2'></div>
                                    </span>

                                    <div className='time__days'>
                                        <p className='font-semibold'>Minutes</p>
                                        <p className='text-4xl font-bold'>{minutes}</p>
                                    </div>

                                    <span className='mt-9'>
                                        <div className='bg-green-700 rounded w-1 h-1'></div>
                                        <div className='bg-green-700 rounded w-1 h-1 mt-2'></div>
                                    </span>

                                    <div className='time__days'>
                                        <p className='font-semibold'>Seconds</p>
                                        <p className='text-4xl font-bold'>{seconds}</p>
                                    </div>

                                </div>

                            </div>

                            <div className="right__left--icon mt-12">
                                <i class="fa-solid fa-arrow-left p-3 bg-slate-100 rounded-3xl me-2 cursor-pointer"></i>
                                <i class="fa-solid fa-arrow-right p-3 bg-slate-100 rounded-3xl cursor-pointer"></i>
                            </div>

                        </div>

                        <div className="cards mt-10 flex justify-between flex-wrap gap-[30px]">

                            <Card />
                            <Card />
                            <Card />
                            <Card />

                        </div>

                        <span className='flex items-center justify-center mt-16'>
                            <Button />
                        </span>

                    </div>

                    <div className="category">

                        <hr className='my-14' />

                        <div className="category__up flex justify-between">
                            <div className='text'>
                                <div className='flex items-center'>
                                    <div className='w-5 h-10 rounded bg-green-700'></div>
                                    <p className='text-green-700 font-semibold ms-3'>Categories</p>
                                </div>
                                <h2 className='text-4xl font-semibold mt-4'>Browse By Category</h2>
                            </div>

                            <div className="right__left--icon mt-[52px]">
                                <i class="fa-solid fa-arrow-left p-3 bg-slate-100 rounded-3xl me-2 cursor-pointer"></i>
                                <i class="fa-solid fa-arrow-right p-3 bg-slate-100 rounded-3xl cursor-pointer"></i>
                            </div>
                        </div>

                        <div className="category__card my-16 flex justify-between gap-[30px] flex-wrap">

                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />

                        </div>

                        <hr />

                    </div>

                    <div className="best__selling mt-16">

                        <div className='best__selling--up flex items-center justify-between'>

                            <div className='text'>
                                <div className='flex items-center'>
                                    <div className='w-5 h-10 rounded bg-green-700'></div>
                                    <p className='text-green-700 font-semibold ms-3'>This Month</p>
                                </div>
                                <h2 className='text-4xl font-semibold mt-4'>Best Selling Products</h2>
                            </div>

                            <span className='mt-8'>
                                <Button />
                            </span>
                        </div>

                        <div className="cards mt-12 flex justify-between flex-wrap gap-[30px]">

                            <Card />
                            <Card />
                            <Card />
                            <Card />

                        </div>
                    </div>

                    <div className="experience flex justify-between mt-24 bg-black py-16 px-10">

                        <div className="experience__content">
                            <p className='font-semibold text-lime-400 mb-7'>Categories</p>
                            <h1 className='text-5xl font-semibold leading-[60px] text-white'>Enhance Your <br /> Music Experience</h1>

                            <div className="time flex justify-between w-80 my-10">

                                <div className='time__hours text-center bg-white w-16 h-16 rounded-full'>
                                    <p className='font-semibold mt-2'>{days}</p>
                                    <p className='text-[11px]'>Days</p>
                                </div>

                                <div className='time__hours text-center bg-white w-16 h-16 rounded-full'>
                                    <p className='font-semibold mt-2'>{hours}</p>
                                    <p className='text-[11px]'>Hours</p>
                                </div>

                                <div className='time__hours text-center bg-white w-16 h-16 rounded-full'>
                                    <p className='font-semibold mt-2'>{minutes}</p>
                                    <p className='text-[11px]'>Minutes</p>
                                </div>

                                <div className='time__hours text-center bg-white w-16 h-16 rounded-full'>
                                    <p className='font-semibold mt-2'>{seconds}</p>
                                    <p className='text-[11px]'>Seconds</p>
                                </div>

                            </div>

                            <div className=''>
                                <Button />
                            </div>

                        </div>

                        <div>
                            <img src="jbl.png" alt="image" />
                        </div>
                    </div>

                    <div className="explore">

                        <div className="category__up my-16 flex justify-between">
                            <div className='text'>
                                <div className='flex items-center'>
                                    <div className='w-5 h-10 rounded bg-green-700'></div>
                                    <p className='text-green-700 font-semibold ms-3'>Our Products</p>
                                </div>
                                <h2 className='text-4xl font-semibold mt-4'>Explore Our Products</h2>
                            </div>

                            <div className="right__left--icon mt-[52px]">
                                <i class="fa-solid fa-arrow-left p-3 bg-slate-100 rounded-3xl me-2 cursor-pointer"></i>
                                <i class="fa-solid fa-arrow-right p-3 bg-slate-100 rounded-3xl cursor-pointer"></i>
                            </div>
                        </div>

                        <div className="cards flex justify-between flex-wrap gap-x-[30px] gap-y-[60px]">

                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />

                        </div>

                        <div className='text-center mt-14'>
                            <Button />
                        </div>

                    </div>

                    <div className="new mt-28">

                        <div className="category__up flex justify-between">
                            <div className='text'>
                                <div className='flex items-center'>
                                    <div className='w-5 h-10 rounded bg-green-700'></div>
                                    <p className='text-green-700 font-semibold ms-3'>Featured</p>
                                </div>
                                <h2 className='text-4xl font-semibold mt-4'>New Arrival</h2>
                            </div>
                        </div>

                        <div className="new__content mt-16 gap-[30px] grid grid-cols-2 h-[600px]">

                            <div className="item-1 rounded col-span-1 row-span-2 bg-black relative px-7">
                                <img src="playstation.png" className='mt-[89px]' alt="" />

                                <div className="new__shop absolute bottom-8 left-8">
                                    <h3 className='font-semibold text-2xl text-white'>PlayStation 5</h3>
                                    <p className="text-white text-sm my-4">Black and White version of the PS5 <br /> coming out on sale.</p>
                                    <a href="#" className='text-white underline font-medium '>Shop Now</a>
                                </div>

                            </div>

                            <div className="item-2 rounded col-span-1 row-span-1 flex justify-between bg-black relative ">
                                <div>
                                    <img src="Frame.png" className='' alt="" />
                                </div>
                                <div className="new__shop absolute bottom-8 left-6">
                                    <h3 className='font-semibold text-2xl text-white'>Women’s Collections</h3>
                                    <p className="text-white text-sm my-2">Featured woman collections that give you another vibe.</p>
                                    <a href="#" className='text-white underline font-medium '>Shop Now</a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-[30px]">

                                <div className="item-3 rounded col-span-1 row-span-full bg-black relative">
                                    <img src="Frame.png" className='absolute top-6 left-8' alt="" />
                                    <div className="new__shop absolute bottom-8 left-6">
                                        <h3 className='font-semibold text-2xl text-white'>Speakers</h3>
                                        <p className="text-white text-sm my-2">Amazon wireless speakers</p>
                                        <a href="#" className='text-white underline font-medium '>Shop Now</a>
                                    </div>
                                </div>

                                <div className="item-4 rounded col-span-1 row-span-full bg-black relative">
                                    <img src="parfume.png" className='ps-8' alt="" />
                                    <div className="new__shop absolute bottom-8 left-6">
                                        <h3 className='font-semibold text-2xl text-white'>Perfume</h3>
                                        <p className="text-white text-sm my-2">GUCCI INTENSE OUD EDP</p>
                                        <a href="#" className='text-white underline font-medium '>Shop Now</a>
                                    </div>
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

                        <div className='relative'>
                            <div className='cursor-pointer absolute right-0 bg-slate-200 w-[46px] h-[46px] flex items-center justify-center rounded-full'>
                                <i class="fa-solid fa-arrow-up"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default index;
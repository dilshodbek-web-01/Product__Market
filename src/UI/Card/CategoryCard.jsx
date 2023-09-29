import React from 'react';

const CategoryCard = () => {
    return (
        <>
            <div className="category__card cursor-pointer w-[170px] h-[145px] border border-gray-300 rounded hover:bg-blue-500 hover:text-white">
                <i class="fa-solid fa-headphones-simple text-5xl ms-16 mt-7 mb-3"></i>
                <p className='text-center'>HeadPhones</p>
            </div>
        </>
    );
};

export default CategoryCard;
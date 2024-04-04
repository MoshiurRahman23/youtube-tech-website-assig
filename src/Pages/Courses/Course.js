import React from 'react';

const Course = ({ item }) => {
    const { name, text, pic, price } = item;
    return (
        <div className='py-5'>
            <div className="flex flex-col lg:flex-row space-x-2 items-center">
                <img className="lg:w-[150px] sm:w-full" src={pic} alt="" />
                <div className='p-5'>
                    <h3 className="uppercase">{name}</h3>
                    <p>{text}</p>
                    <p className="text-blue-500 font-bold">Price ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;
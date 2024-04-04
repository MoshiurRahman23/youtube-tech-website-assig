import React from 'react';

const Join = () => {
    return (
        <div className='my-10 lg:p-16 sm:p-0 bg-blue-500 text-white'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:justify-between gap-4 lg:justify-items-end'>
                <div>
                    <h1 className='text-5xl font-bold pb-8'>Ready to join?</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout.</p>
                </div>
                <div>
                    <button className="btn btn-white py-5 text-primary p-5 items-center">Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default Join;
import React from 'react';
import Review from './Review';

const Reviews = () => {
    return (
        <div className='text-center'>
            <dir>
                <h1 className="text-4xl font-bold py-5">Some Students Feedback</h1>
                <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
            </dir>
            <div className='p-12'>
                <Review></Review>
            </div>
            <div className='text-center'>
                <button className="btn btn-primary py-5 text-white">View All</button>
            </div>
        </div>
    );
};

export default Reviews;
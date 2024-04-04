import React from 'react';
import workImg from '../../Assets/images/working.png';

const WorkSection = () => {
    return (
        <div className='my-5'>
            <div className="hero bg-lime-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={workImg} />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Explore The elearning Institute</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.
                            <br />
                            Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined..
                        </p>
                        <div className="stats stats-vertical w-full lg:stats-horizontal shadow">

                            <div className="stat">
                                <div className="stat-value">31K +</div>
                                <div className="stat-desc">Online Course</div>
                            </div>

                            <div className="stat">
                                <div className="stat-value">4,200 +</div>
                                <div className="stat-desc">Expert member</div>
                            </div>

                            <div className="stat">
                                <div className="stat-value">1,200 + </div>
                                <div className="stat-desc">Rating & Review</div>
                            </div>

                        </div>
                        <div className='my-5'>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;
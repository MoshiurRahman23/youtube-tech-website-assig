import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import moduleName from '../../Assets/images/comma.png';
import stu1 from '../../Assets/images/student/student-5.png';
import stu2 from '../../Assets/images/student/student-6.png';

const Review = () => {
    return (
        <div className='lg:p-12 sm:p-0'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="card w-full">
                        <div className='flex justify-between'>
                            <div>
                                <img src={moduleName} alt="" />
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            </div>
                        </div>
                        <div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.</p>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img alt='' src={stu2} />
                                    <h2 className='text-2xl'>Awlad Hossain</h2>
                                    <p>UI Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full">
                        <div className='flex justify-between'>
                            <div>
                                <img src={moduleName} alt="" />
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            </div>
                        </div>
                        <div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.</p>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img alt='' src={stu1} />
                                    <h2 className='text-2xl'>Awlad Hossain</h2>
                                    <p>UI Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-full">
                        <div className='flex justify-between'>
                            <div>
                                <img src={moduleName} alt="" />
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
                            </div>
                        </div>
                        <div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.</p>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img alt='' src={stu2} />
                                    <h2 className='text-2xl'>Awlad Hossain</h2>
                                    <p>UI Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Review;
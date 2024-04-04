import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import cover1 from '../../Assets/images/cover/cover-1.png';
import cover2 from '../../Assets/images/cover/cover-2.jpg';
import cover3 from '../../Assets/images/cover/cover-3.jpg';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero h-[620px]" style={{ backgroundImage: `url(${cover1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Get Started Digital Learning</h1>
                                <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[620px]" style={{ backgroundImage: `url(${cover2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Get Started Digital Learning</h1>
                                <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="hero h-[620px]" style={{ backgroundImage: `url(${cover3})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Get Started Digital Learning</h1>
                            <p className="mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
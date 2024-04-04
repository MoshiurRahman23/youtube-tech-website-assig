import React from 'react';
import img1 from '../../Assets/images/company/company-1.png';
import img2 from '../../Assets/images/company/company-2.png';
import img3 from '../../Assets/images/company/company-3.png';
import img4 from '../../Assets/images/company/company-4.png';
import img5 from '../../Assets/images/company/company-5.png';
import img6 from '../../Assets/images/company/company-6.png';

const Companies = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-5">Trusted by over 800+ companies</h2>
            <div className='my-12 mx-8 flex  flex-col lg:flex-row  justify-between  justify-items-center'>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Companies;
import React from 'react';
import Stnd1 from '../../Assets/images/student/student-1.png';
import Stnd2 from '../../Assets/images/student/student-2.png';
import Stnd3 from '../../Assets/images/student/student-3.png';
import Stnd4 from '../../Assets/images/student/student-4.png';
import Student from './Student';

const Students = () => {

    const studentData = [
        {
            id: 1,
            name: "Awlad Hossain",
            pic: Stnd1,
            designation: "UIUX Designer"
        },
        {
            id: 2,
            name: "Jannatul Islam",
            pic: Stnd2,
            designation: "Motion Design"
        },
        {
            id: 3,
            name: "Imran Hossain",
            pic: Stnd3,
            designation: "Graphic Designer"
        },
        {
            id: 4,
            name: "Nishi Akter",
            pic: Stnd4,
            designation: "web Developer"
        }
    ]

    return (
        <div className='my-9'>
            <div className='text-center my-7'>
                <h1 className='text-4xl font-bold py-4'>Meet Our Successful Students</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                {
                    studentData.map(data => <Student
                        key={data.id}
                        data={data}
                    ></Student>)
                }
            </div>
        </div>
    );
};

export default Students;
import React from 'react';
import courseImg1 from '../../Assets/images/course/course-1.png';
import courseImg2 from '../../Assets/images/course/course-2.png';
import courseImg3 from '../../Assets/images/course/course-3.png';
import courseImg4 from '../../Assets/images/course/course-4.png';
import courseImg5 from '../../Assets/images/course/course-5.png';
import courseImg6 from '../../Assets/images/course/course-6.png';
import Course from './Course';

const Courses = () => {

    const courseData = [
        {
            id: 1,
            pic: courseImg1,
            name: "Fundamental Of UI/UX Design",
            text: "Some quick example text to build on the card title and make up the bulk of the card.",
            price: 1999
        },
        {
            id: 2,
            pic: courseImg2,
            name: "Javascript Basic to advanced",
            text: "Some quick example text to build on the card title and make up the bulk of the card.",
            price: 1999
        },
        {
            id: 3,
            pic: courseImg3,
            name: "Fullstack Web Development",
            text: "Some quick example text to build on the card title and make up the bulk of the card.",
            price: 1999
        },
        {
            id: 4,
            pic: courseImg4,
            name: "Digital Marketing",
            text: "Some quick example text to build on the card title and make up the bulk of the card.",
            price: 1999
        },
        {
            id: 5,
            pic: courseImg5,
            name: "Photography Basic Rules",
            text: "Some quick example text to build on the card title and make up the bulk of the card.",
            price: 1999
        },
        {
            id: 6,
            pic: courseImg6,
            name: "Motion Graphics",
            text: "Some quick example text to build on the card title and make up the bulk of the card.",
            price: 1999
        }
    ]


    return (
        <div className='my-8'>
            <div className='text-center'>
                <h2 className="text-4xl font-bold">Discover Our Popular <br />  Courses</h2>
                <p className='py-5'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
            </div>
            <div className='grid gap-5 lg:grid-cols-2 sm:grid-cols-1 py-7'>
                {
                    courseData.map(item => <Course
                        key={item.id}
                        item={item}
                    ></Course>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-primary py-5 text-white">See More Courses</button>
            </div>
        </div>

    );
};

export default Courses;
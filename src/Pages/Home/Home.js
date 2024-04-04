import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import WorkSection from '../WorkSection/WorkSection';
import Join from '../Join/Join';
import Students from '../Students/Students';
import Reviews from '../Reviews/Reviews';
import Questions from '../Questions/Questions';
import Companies from '../Companies/Companies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <WorkSection></WorkSection>
            <Join></Join>
            <Students></Students>
            <Reviews></Reviews>
            <Questions></Questions>
            <Companies></Companies>
        </div>
    );
};

export default Home;
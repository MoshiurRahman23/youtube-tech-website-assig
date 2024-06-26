import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Share/Navbar/Navbar';
import Footer from '../../Pages/Share/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
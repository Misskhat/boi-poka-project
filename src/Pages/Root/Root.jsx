import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto' >
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
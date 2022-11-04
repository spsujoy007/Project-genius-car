import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
            <Header>
                <div className='md:mx-20 mx-6'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            </Header>
    );
};

export default Main;
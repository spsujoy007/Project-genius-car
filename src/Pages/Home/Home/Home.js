import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-28'>
                <About></About>
            </div>

            <Services></Services>
        </div>
    );
};

export default Home;
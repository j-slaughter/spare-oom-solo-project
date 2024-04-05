import React from 'react';
import './home.scss';
import HeroBanner from '../../components/heroBanner/HeroBanner.jsx';

const Home = () => {
    return (
        <div className='homepage'>
            <HeroBanner />
        </div>
    );
};

export default Home;
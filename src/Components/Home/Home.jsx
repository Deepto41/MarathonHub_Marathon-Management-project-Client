import React from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming_Marathon/Upcoming';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Upcoming></Upcoming>
            <Faq></Faq>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming_Marathon/Upcoming';
import Faq from '../Faq/Faq';
import SuccessfulEvents from '../SuccessfulEvents/SuccessfulEvents';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Upcoming></Upcoming>
            <SuccessfulEvents></SuccessfulEvents>
            <Faq></Faq>
        </div>
    );
};

export default Home;
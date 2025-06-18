import React from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming_Marathon/Upcoming';
import Faq from '../Faq/Faq';
import SuccessfulEvents from '../SuccessfulEvents/SuccessfulEvents';
import Marathoncards from '../../Marathoncards/Marathoncards';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data =useLoaderData();
 
    return (
        <div>
            <Banner></Banner>
            <Marathoncards data={data}></Marathoncards>
            <Upcoming></Upcoming>
            <SuccessfulEvents></SuccessfulEvents>
            <Faq></Faq>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Upcoming from '../Upcoming_Marathon/Upcoming';
import Faq from '../Faq/Faq';
import SuccessfulEvents from '../SuccessfulEvents/SuccessfulEvents';
import Marathoncards from '../../Marathoncards/Marathoncards';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';

const Home = () => {
    const data =useLoaderData();
 
    return (
        <div>
           
                <title>Home || MarathonHub</title>
            
            <Banner></Banner>
            <Marathoncards data={data}></Marathoncards>
            <Upcoming></Upcoming>
            <SuccessfulEvents></SuccessfulEvents>
            <Faq></Faq>
        </div>
    );
};

export default Home;
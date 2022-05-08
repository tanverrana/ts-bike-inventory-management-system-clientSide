import React from 'react';
import Banner from '../Banner/Banner';
import Partners from '../Partners/Partners';
import Products from '../Products/Products';
import SingleBIke from '../SingleBike/SingleBIke';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SingleBIke></SingleBIke>
            <Products></Products>
            <Partners></Partners>
        </div>
    );
};

export default Home;
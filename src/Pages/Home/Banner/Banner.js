import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="container">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="550px"
                    src="https://pbs.twimg.com/media/EoZq627U0AESf3D.jpg:large"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="550px"
                    src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/5d923fed2a0ab70e68ccaefc/offer-22-gor-mcy-1920-02012022.jpg"
                    alt="Second slide"
                />


            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;
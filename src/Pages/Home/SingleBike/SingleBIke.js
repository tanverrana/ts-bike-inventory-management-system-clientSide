import React from 'react';
import "./SingleBike.css";

const SingleBIke = () => {
    return (
        <div>
            <div className="container bike">
                <div className="bike-left">
                    <h1>Get Ready For Ride!!</h1>
                    <p>Choosing a new bike used to be so easy. With limited selection, your decision usually just revolved around price.
                        Nowadays, there are hundreds of models to choose from, and to make matters even more confusing, your smartphone already takes pretty good photos!</p>
                    <button className="live-btn mb-4">View Demo</button>
                </div>
                <div className="bike-right">
                    <img src="https://gumlet.assettype.com/evoindia%2F2021-11%2Fc5e3d1b8-f41c-48a6-92fa-230b7e009cc8%2F2022_Yamaha_MT_10_Europe_27_scaled.jpg?format=auto" className=" img-fluid" width="560px" alt="" />
                </div>

            </div>
        </div>
    );
};

export default SingleBIke;
import React from 'react';
import ImageDiv from '../../components/ImageDiv';
import car from '../../images/Vehicle_photo.png'
import Footer from '../../components/Footer';

import './Page3.css';

const Page3 = () => {
    return (
        <>
        <body>
            <div className="picture-page3">
                <ImageDiv image={car}
                        description={"Car"} />
             </div>

            <div className="info-page2">
                <div className="driver-info">
                YOUR VEHICLE
                </div>
                <h1 className="name">
                Alto 09
                </h1>
                <br/>
                <div className="info-div">
                    <div className="section1">
                        <hr className="line-page3" />
                        <div className="description">
                            Make / Model
                        </div>
                            <div className="make">
                                2019 Volkswagen Atlas
                            </div>
                    </div>
                    <div className="section2">
                        <hr className="line-page3" />
                        <div className="description">
                            Color
                        </div>
                            <div className="make">
                                Pure White
                            </div>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="boxed-page2">
                    <p className="contact-text">IDENTIFY VEHICLE</p>
                </div>
            </div>
        </body>
        <Footer description={"ETA: 5:39 PM"} />
        </>
    )
}

export default Page3
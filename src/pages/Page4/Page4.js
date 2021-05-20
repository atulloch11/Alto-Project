import React from 'react';
import ImageDiv from '../../components/ImageDiv';
import map from '../../images/Map_overview.png';
import Footer from '../../components/Footer';

import './Page4.css';

const Page4 = () => {
    return (
        <>
        <body>
        <div className="main-page2">
            <div className="picture-page4">
                <ImageDiv image={map}
                            description={"Map"} />    
            </div>        

            <div className="info-page4">
                <div className="driver-info">
                YOUR TRIP
                </div>
                <h1 className="name">
                <h4 className="time">5:39<span className="pm">PM</span></h4>
                </h1>
                <div className="description-page4">
                Estimated arrival at DFW Int'l Airport - Terminal E
                </div>
                <div className="section">
                <hr className="line-page4" />
                <div className="current-vibe">
                    Current Vibe
                    <br/>
                    <span className="beats">Vaperwave Beats</span>
                </div>
                </div>
            </div>

            <div className="contact-page4">
                <div className="boxed-page4">
                    <p className="vibe-text">CHANGE VEHICLE VIBE</p>
                </div>
            </div>
        </div>
        </body>
        <Footer description={"En route..."} />
        </>
    )
}

export default Page4
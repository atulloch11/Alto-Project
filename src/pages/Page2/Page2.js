import React from 'react';
import ImageDiv from '../../components/ImageDiv';
import Image from '../../images/Driver_photo.png';

import Footer from '../../components/Footer';


import './Page2.css';

const Page2 = () => {
    return (
        <>
        <body>
        <div className="main-page2">
            <ImageDiv image={Image}
                    description={"Driver"} />

            <div className="info-page2">
                <div className="driver-info">
                YOUR DRIVER
                </div>
                <h1 className="name">
                Steph
                </h1>
                <br/>
                <hr className="line-page2" />
                <div className="description">
                Step Festiculma is a graduate of Parsons New School
                in New York and fluent in Portugeuse, Spanish and English.
                Steph has been driving with Alto since 2018.
                </div>
            </div>

            <div className="contact">
                <div className="boxed-page2">
                    <p className="contact-text">CONTACT DRIVER</p>
                </div>
            </div>
        </div>
        </body>

        <Footer description={"ETA: 5:39 PM"} />
        </>
    )
}

export default Page2

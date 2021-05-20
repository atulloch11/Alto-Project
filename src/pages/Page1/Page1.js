import React from 'react'
import logo from '../../images/Alto_logo.png';
import kabob from '../../images/Kabob_nav.png';
import info from '../../images/Info_icon.png';
import edit from '../../images/Edit_icon.png';
import Footer from '../../components/Footer';
import "./Page1.css";

function Line() {
    return <hr className="line" />;
}

function Info(props) {
    return <div className="info-item">{props.item}</div>;
}

function Item(props) {
    return <div className="item-info">{props.info}</div>;
}

function Item2(props) {
    return <div className="item-info">{props.info}
    <img src={info} className="info-icon" alt="info" /></div>;
}

const Page1 = () => {
    return (
        <>
        <body>
        <div className="main">
                <img src={logo} className="logo" alt="logo" />
                <div className="trip">Your Trip</div>
                <img src={kabob} className="kabob" alt="kabob" />

            <section className="main-section">
                <h1 className="time">5:39<span className="pm"> PM</span></h1>
                <p className="estimated">Estimated arrival at DFW Int'l Airport - Terminal E</p>
            </section>

            <div className="sec1">
                <Line />
                <Info item="Estimated Fare:" />
                <Item2 info="$65 - $75" />
            </div>
            <div className="sec2">
                <Line />
                <Info item="Passengers:" />
                <Item info="1 - 5" />
            </div>
            <div className="sec3">
                <Line />
                <Info item="Payment:" />
                <Item info="Amex01" />
            </div>

            <div className="info">
                449 Flora St.
                <p className="address">
                Dallas, Texas 75201
                </p>
                <hr className="line2" />
                <p className="dfw-info">
                DFW International Airport
                <p className="address">
                American Airlines Terminal E
                </p>
                Irving, Texas 75261
                </p>

                <p className="AA">
                Can you drop me off at AA
                International Bag Drop please?
                <img src={edit} className="edit" alt="edit" />
                </p>
            </div>

            <div className="cancel">
                <div className="boxed">
                    <p className="cancel-text">CANCEL TRIP</p>
                </div>
            </div>
        </div>
        </body>
        <Footer description={"ETA: 5:39 PM"} />
        </>
    )
}

export default Page1

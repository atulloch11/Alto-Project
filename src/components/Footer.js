import React from 'react';
import profile from '../images/Profile_icon.png';
import vibes from '../images/Vibes_icon.png';

import './footer.css';

const Footer = (props) => {
    return (
        <div className="Footer">
           
            <div className="profile-img">
                 <hr className="line-footer" />
                <img src={profile} className="profile" alt="profile" />
            </div>
            <div className="footer-info">
                <hr className="line-footer" />
                <h3 className="dfw">DFW Int'l Airport</h3>
                <p className="eta">{props.description}</p>
            </div>
            <div className="vibes-img">
                <hr className="line-footer" />
                <img src={vibes} className="vibes" alt="vibes" />
            </div>
        </div>
    )
}

export default Footer
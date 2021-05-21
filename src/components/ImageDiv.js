import React from 'react';
import logo from '../images/Alto_logo.png';
import kabob from '../images/Kabob_nav.png';
import mapIcon from '../images/Map_icon.png';

import { PicDiv, Logo, Image, Kabob, MapIcon } from '../Styled/Picture';

function Map(props) {
    const isPage4 = props.isPage4;
    if (isPage4) {
        return (
            <MapIcon>
                <img src={mapIcon} alt="Map Icon" />
            </MapIcon>
        )
    }
    return "";
}

export default class ImageDiv extends React.Component {
    render() {
        return (
            <PicDiv>
                <Logo>
                    <img src={logo} style={{height: "25px", width: "100px"}} alt="logo" />
                </Logo>    
                <Image>
                    <img src={this.props.image} style={{height: "auto", maxWidth: "100%"}} alt={this.props.description} />
                </Image>
                <Kabob>
                    <img src={kabob} alt="kabob" />
                </Kabob>
                <Map isPage4={this.props.isPage4} />
            </PicDiv>        
        );
    }
}

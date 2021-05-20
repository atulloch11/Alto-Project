import React from 'react';
import logo from '../images/Alto_logo.png';
import kabob from '../images/Kabob_nav.png';

import { PicDiv, Logo, Image, Kabob } from '../Styled/Picture';

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
            </PicDiv>        
        );
    }
}

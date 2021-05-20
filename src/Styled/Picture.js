import styled from 'styled-components';

const PicDiv = styled.div`
    display: grid;
    grid-template-columns: 10px auto auto;
    height: 400px;

    @media screen and (max-width: 650px) {
        height: auto;
    }
`;

const Logo = styled.div`
    grid-column: 2 / 3;
    position: absolute;
    z-index: 2;
    left: 49%;
    top: 100px;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 650px) {
        top: 75px;
    }
`;

const Image = styled.div`
    grid-column: 1 / span 3;
    text-align: center;
    overflow: hidden;

    @media screen and (max-width: 650px) {
        max-width: 100%;
        height: auto;
        display: block;
    }
`;

const Kabob = styled.div`
    grid-column: 3 / 3;
    position: absolute;
    z-index: 2;
    right: 150px;
    top: 75px;

    @media screen and (max-width: 650px) {
        right: 25px;
    }
`;

export { PicDiv, Logo, Image, Kabob };
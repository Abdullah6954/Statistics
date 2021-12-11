import React from 'react';
import statis from '../images/statis.svg';

const Intro = () => {
    return(
        <div data-aos="zoom-out" id="intro">
            <img data-aos="flip-left" src={statis} alt="statis" />
            <h3 data-aos="flip-right">L'OBÉSITÉ</h3>
        </div>
    );
    
}

export default Intro;
import React from 'react';
import statis from '../images/statis.svg';

const Intro = () => {
    return(
        <div data-aos="zoom-out" id="intro">
            <img data-aos="flip-left" src={statis} alt="statis" />
            <h3 data-aos="flip-right">Welcome To My Presentation</h3>
        </div>
    );
    
}

export default Intro;
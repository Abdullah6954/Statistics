import React from 'react';
import statis from '../images/statis.svg';

const Intro = () => {
    return(
        <div id="intro">
            <img src={statis} alt="statis" />
            <h3>Welcome To My Presentation</h3>
        </div>
    );
    
}

export default Intro;
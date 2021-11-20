import React, {useState } from 'react';
import statis from '../images/statis.svg';

const Intro = () => {
    const [opacity, setOpacity] = useState(false);
    return(
        <div id="intro">
            <img src={statis} alt="statis" />
            <h3 style={{opacity: opacity ? 0 : 1}} onMouseEnter={() => setOpacity(true)}>Welcome To My Presentation</h3>
        </div>
    );
    
}

export default Intro;
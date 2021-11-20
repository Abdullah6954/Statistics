import React, { Component } from 'react';
import statis from '../images/statis.svg';

class Intro extends Component{
    render(){
        return(
            <div id="intro">
                <img src={statis} alt="statis" />
                <h3>Welcome To My Presentation</h3>
            </div>
        );
    }
}

export default Intro;
import React, { Component } from 'react';
import statis from '../images/statis.svg';

class Intro extends Component{
    render(){
        return(
            <div id="intro">
                <img src={statis} alt="statis" />
            </div>
        );
    }
}

export default Intro;
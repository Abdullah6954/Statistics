import React, { Component } from "react";
import heart from '../images/photos/heart.jpg';

class Diseases extends Component{
    render(){
        return(
            <div>
                <img src={heart} alt="Heart" />
                <article>
                    <div>LE Cadiopathie</div>
                    <div>L'ACCIDENT VASCULAIRE CÉLÉBRAL</div>
                    <div>L'APUNÉE DU SOMMEIL</div>
                    <div>LE DIABÈTE</div>
                </article>
            </div>
        );
    }
}

export default Diseases;
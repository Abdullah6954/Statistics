import React, { Component } from "react";

// SVG
import heart from '../images/diseases/heart.svg';
import medicalCare from '../images/diseases/medicalCare.svg';
import headache from '../images/diseases/headache.svg';
import diabetes from '../images/diseases/diabetes.svg';

class Diseases extends Component{
    state={
        cards:[
            {key:0, text:"Le Cadiopathie", svg:heart, aos: 'zoom-out', duration: 1000},
            {key:1, text:"L'Accident Vasculaire Célébral", svg:medicalCare, aos:'zoom-in', duration: 1250},
            {key:2, text:"L'Apunée Du Sommeil", svg:headache, aos: 'zoom-out', duration: 1000},
            {key:3, text:"Le Diabète", svg:diabetes, aos: 'zoom-in', duration: 1250},
        ]
    }
    render(){
        return(
            <div>
                <article>
                    {this.state.cards.map(card => <div
                                                    data-aos={card.aos}
                                                    data-aos-duration={card.duration} 
                                                    key={card.key}
                                                    data-text={card.text}>
                                                        <img src={card.svg} alt={card.text}/>
                                                   </div>)}
                </article>
            </div>
        );
    }
}

export default Diseases;
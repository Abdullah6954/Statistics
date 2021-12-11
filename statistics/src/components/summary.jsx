import React, { Component } from 'react';
import junkFood from '../images/photos/junkFood.png';

class Summary extends Component{
    render(){
        return(
            <div>
                <div data-aos="fade-left">
                    <h3>Le résumé</h3>
                    <p className='lead'>L'obésité est une maladie très mauvaise qui tue 3 millions de personned par an. C'est pourquoi nous devons l'éviter en faisant des exercices et en mangeant des aliments sains.</p>
                </div>
                <img data-aos="zoom-out" src={junkFood} alt="Junk Food" />
            </div>
        );
    }
}

export default Summary;
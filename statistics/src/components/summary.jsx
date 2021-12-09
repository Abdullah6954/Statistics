import React, { Component } from 'react';
import junkFood from '../images/photos/junkFood.png';

class Summary extends Component{
    render(){
        return(
            <div>
                <div>
                    <h3>Le Résumé</h3>
                    <p className='lead'>L'obésité est une maladie très mauvaise qui tue 3 millions de personned par an. C'est pourqoui nous devons l'éviter en fasant des exercices et en mangeant des aliments sains.</p>
                </div>
                <img src={junkFood} alt="Junk Food" />
            </div>
        );
    }
}

export default Summary;
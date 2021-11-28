import React, { Component } from "react";
import fastFood from '../images/photos/fastFood.jpg';

class Calories extends Component{
    render(){
        return(
            <div id="calories">
                <img src={fastFood} alt="" />
                <div>
                    <h3>Calories</h3>
                    <p className="lead">La restauration rapide est le principal supporteur de l'obésité et des problèmes de santé, car elle contient une quantité énorme de calories par rapport à une alimentation saine !</p>
                </div>
            </div>
        );
    }
}

export default Calories;
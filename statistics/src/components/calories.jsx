import React, { Component } from "react";
import fastFood from '../images/photos/fastFood.jpg';

class Calories extends Component{
    render(){
        return(
            <div data-aos="flip-down" id="calories">
                <img data-aos="zoom-out" src={fastFood} alt="" />
                <div data-aos="zoom-in">
                    <h3 data-aos="fade-down">Calories</h3>
                    <p data-aos="fade-up" className="lead">La restauration rapide est la principal cause de l'obésité et des problèmes de santé, car elle contient une quantité énorme de calories par rapport à une alimentation saine !</p>
                </div>
            </div>
        );
    }
}

export default Calories;
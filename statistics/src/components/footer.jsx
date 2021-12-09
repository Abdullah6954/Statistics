import React, { Component } from 'react';

// Icons
import html from '../images/icons/html.svg';
import css from '../images/icons/css.svg';
import javascript from '../images/icons/javascript.svg';
import react from '../images/icons/react.svg';
import bootstrap from '../images/icons/bootstrap.svg';
import google from '../images/icons/google.svg';


class Footer extends Component{
    state={
        icons:[
            {key: 0, text: 'HTML', svg: html},
            {key: 1, text: 'CSS', svg: css},
            {key: 2, text: 'Javascript', svg: javascript},
            {key: 3, text: 'React', svg: react},
            {key: 4, text: 'Bootstrap', svg: bootstrap},
            {key: 5, text: 'Google', svg: google},
        ]
    }
    render(){
        return(
            <footer>
                <a href="https://abud-personal-website.netlify.com">Naranja</a>
                <span>Copyright &copy; 2021 All rights reserved to <mark>Abdullah Kordi</mark></span>
                <div>
                    {this.state.icons.map(icon => <img src={icon.svg} alt={icon.text} />)}
                </div>
            </footer>
        );
    }
}

export default Footer;
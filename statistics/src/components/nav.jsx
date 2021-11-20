import React, { Component } from "react";

class Nav extends Component{
    render(){
        return(
            <nav>
                <a href="https://abud-personal-website.netlify.com">Naranja</a>
                <ul>
                    <li>World</li>
                    <li>Germany</li>
                    <li>France</li>
                    <li>Fast Food</li>
                    <li>Any</li>
                </ul>
                <button>Get in Touch</button>
            </nav>
        );
    }
}

export default Nav;
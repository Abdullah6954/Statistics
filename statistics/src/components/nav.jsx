import React, { Component } from "react";

class Nav extends Component{
    render(){
        return(
            <nav>
                <a id="brand" href="https://abud-personal-website.netlify.com">Naranja</a>
                <ul>
                    <a href="#brand"><li>Home</li></a>
                    <a href="#brand">
                        <li style={{padding:0}}>
                            <select name="" id="">
                                <option value="Statistics" defaultValue>Statistics</option>
                                <option value="World">World</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                            </select>
                        </li>
                    </a>
                </ul>
            </nav>
        );
    }
}

export default Nav;
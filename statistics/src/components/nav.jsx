import React, { Component} from "react";
import arrowDown from '../images/arrowDown.svg';

class Nav extends Component{
    style={
        div:{
            display: 'none',
            transition: '0.2s ease-in-out'
        },
        divHover:{
            position: 'absolute',
            left: 0,
            display: 'flex',
            justifyContetn: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            transition: '0.2s ease-in-out'
        }
    }
    state={
        hovered: false,
    }
    render(){
        return(
            <nav>
                <a id="brand" href="https://abud-personal-website.netlify.com">Naranja</a>
                <ul>
                    <a href="#brand"><li>Home</li></a>
                    <li style={{backgroundColor: this.state.hovered ? 'rgba(250,250,250,0.3)' :'#6c63ff'}} onMouseEnter={() => this.setState({hovered: true})}
                        onMouseLeave={() => this.setState({hovered: false})}
                    >
                        Menu <img width="15px" height="15px" src={arrowDown} alt="." />
                        <div style={!this.state.hovered ? this.style.div : this.style.divHover}>
                            <a href="#brand">World</a>
                            <a href="#brand">Germany</a>
                            <a style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} href="#brand">France</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
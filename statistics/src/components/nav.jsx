import React, { Component} from "react";

// SVG
import arrowDown from '../images/arrowDown.svg';
import show from '../images/show.svg';
import hide from '../images/hide.svg';


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
        },
        nav:{
            top: 0
        },
        noNav:{
            top: '-80px'
        }
    }
    state={
        hovered: false,
        clicked: false,
        text: 'Hide'
    }
    render(){
        return(
            <nav style={!this.state.clicked ? this.style.nav : this.style.noNav}>
                <img    width={this.state.clicked ? 40 : 50} height={this.state.clicked ? 40 : 50}
                        style={{backgroundColor: this.state.clicked ? '#f50057' : '#6c63ff', top: this.state.clicked ? '125%' : '100%'}}
                        id="img" src={this.state.clicked ? show : hide} alt={this.state.text}
                        onClick={() => this.setState({clicked: !this.state.clicked, text: !this.state.clicked ? 'Hide' : 'Show'})}
                />
                <a id="brand" href="https://abud-personal-website.netlify.com" rel="noreferrer" target="_blank">Naranja</a>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <li style={{backgroundColor: this.state.hovered ? '#f50057' :'#6c63ff'}} onMouseEnter={() => this.setState({hovered: true})}
                        onMouseLeave={() => this.setState({hovered: false})}
                    >
                        Menu <img width="15px" height="15px" src={arrowDown} alt="."/>
                        <div style={!this.state.hovered ? this.style.div : this.style.divHover}>
                            <a href="#world">World</a>
                            <a href="#countries">Countries</a>
                            <a style={{borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} href="#fastFood">Fast Food</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
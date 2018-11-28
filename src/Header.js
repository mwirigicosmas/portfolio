import React, {Component} from 'react';
import Background from './img/safari.jpg';
import './Header.css';


class Header extends Component{

    render(){
        const heroImageStyle = {
            backgroundImage: `url(${Background}) `,
            height:'80vh',
            backgroundSize:'cover',
            backgroundAttachment:'fixed',
            width:'100%'
        
        };
        
        return(
            <header style={heroImageStyle}>
            <div className="my-header">
            <h1>{this.props.title}</h1>
            <p><i>A Mwirigi Cosmas React Portfolio Theme</i></p>
            <a href="#button">{this.props.button}</a>
            </div>
           
            </header>

        );
    }
}

export default Header;
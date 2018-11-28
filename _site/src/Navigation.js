import React, { Component } from 'react';
import './Navigation.css';

// import './App.css';

class Navigation extends Component {
    
  render() {
    const sections =['Home','About','Services','Portfolio','Contacts'];
    const navLinks = sections.map( section => {
        return(
            <li><a href = {'#' + section}>{section}</a></li>
        )

    });
    return (
        <nav>
            <h2 className="logo">{this.props.logoTitle}</h2>
            <ul>
                {navLinks}
            </ul>
        </nav>
      
    );
  }
}

export default Navigation;

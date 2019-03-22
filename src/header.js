import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header images">
        <div className="container">
            <a className="fl mt"><img height="30px" width="130px" src="https://images.thrillophilia.com/image/upload/s--8pLHCDF7--/dpr_1.0,w_200/v1/custom_images/photos/000/000/002/original/1508822215_logo2x_updated.png.png?1508822215&quot"></img></a>
            <div className="topnav fl ml30">
                <a href="#news">Getaways</a>
                <a href="#contact">Tours</a>
                <a href="#about">Activities</a>
                <a className="ml10" href="#search">Search</a>
           </div>
           <div className="topnav fr">
                <a href="#home">Gift an Experience</a>
                <a href="#home">Get App</a>
                <a className="mr10" href="#home"><div className="loginBox">Login</div></a>
           </div>
        </div>
        <div className="centralText">
            <div className="fs50">Thrillophilia Staycations</div>
            <div className="innerHead">
            Our Handpicked most experiential stays in SriLanka
            </div>
            <div className="lowerText">
            EXPLORE STAYCATIONS
            </div>
        </div>
      </div>
    );
  }
}

export default Header;

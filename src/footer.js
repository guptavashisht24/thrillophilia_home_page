import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div className="ml80 pt50">
      <img src="https://images.thrillophilia.com/image/upload/s--ida79HK5--/dpr_1.0,w_300/v1/custom_images/photos/000/000/007/original/1508821727_new_logo_thrillophilia_update.png.png?1508821727"></img>
      </div>
      <div className="df">
        <div className="w30 white ml80">
            <div className="mb10">
            About us
            </div>
            <div className="mb10">
            thrillophilia reviews
            </div>
            <div className="mb10">
            Terms and Conditions
            </div>
            <div className="mb10">
            Privacy Policy
            </div>
            <div className="mb10">
            Copyright Policy
            </div>
            <div className="mb10">
            Support Policy
            </div>
            <div className="mb10 yellow">
            We are hiring
            </div>
        </div>
        <div className="w30 ml10 greyed">
            <div className="mb10 white">
            Recent Blog Posts
            </div>
            <div className="mb10">
            20 places you need to visit
            </div>
            <div className="mb10">
            50 Best honeymoon destinations
            </div>
            <div className="mb10">
            30 kickass destinations.....
            </div>
            <div className="mb10">
            52 places to visit before you turn 30
            </div>
            
        </div>
        <div className="w30 white ml10">
            <div className="mb20 yellow">
                Go Pro Passport Program
            </div>
            <div className="mb10 white">
                Suppliers
            </div>
            <div className="mb10 yellow">
            Support Policy
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Footer;

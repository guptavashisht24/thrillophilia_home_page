import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';

class UserReviews extends Component {
  render() {
    return (
      <div className="user_review">
        <div className="crx pd20">
            <div className="usr_rat fl ml60">
                User Reviews
                <div>
                    <i className="fa fa-star golden fs"></i>
                    <i className="fa fa-star golden fs"></i>
                    <i className="fa fa-star golden fs"></i>
                    <i className="fa fa-star golden fs"></i>
                    <i className="fa fa-star golden fs"></i>
                    <span className="orange fs">2 Reviews</span>
                </div>
                <div className="pdt40 fs">
                 Home  >  <span className="orange">Sri Lanka</span>
                </div>
            </div>
            <div className="usr_rat fr mr90">
            Top Trusted Travel Brand
            <div className="pdt10">
                <div className="b1 dib ti mr15">
                </div>
                <div className="b2 dib ti mr15">
                </div>
                <div className="b3 dib ti mr15">
                </div>
                <div className="b4 dib ti">
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default UserReviews;

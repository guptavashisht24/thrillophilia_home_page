import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import UserReviews from './userreview';
import Description from './description';
import Recommendations from './recommendations'; 
import Form from './form';
import Suggestions from './suggestions';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <UserReviews/>
        <Description/>
  <Recommendations head={"Thrillophilia Recommendations for Srilanka"} count={8}/>
  <Recommendations head={"Things to do in SriLanka"} count={4}/>
  <Recommendations head={"SriLanka Tours"} count={4}/>
  <Recommendations head={"Attractions"} count={8} type={"static"}/>
  <Form/>
  <Recommendations head={"Travel Guides for SriLanka"} count={8} type={"basic"}/>
  <Suggestions head={'More things to do in Srilanka'}/>
  <Suggestions head={'Top SriLanka Attractions'}/>
  <Suggestions head={'Listings in SriLanka'}/>
  <Footer/>
      </div>
    );
  }
}

export default App;

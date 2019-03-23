import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      image : 1
    }
    this.imageChange = this.imageChange.bind(this);
    this.someHandler  = this.someHandler.bind(this);
    this.someOtherHandler = this.someOtherHandler.bind(this);
  }
  someHandler(i){
    document.getElementById(""+i+"").classList.remove("whites");
    document.getElementById(""+i+"").classList.add("oranges");
  }
  someOtherHandler(i){
    document.getElementById(""+i+"").classList.remove("oranges");
    document.getElementById(""+i+"").classList.add("whites");
  }
  imageChange(b){
    this.setState({
      image : b
    })
  }
  render() {
    let url = ''
    if(this.state.image==1){
      url = "https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-stays-e8568d04a2f8b218be5065e2ae708ffd.jpg"
    }
    else if(this.state.image == 2){
      url = "https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-tours-ef50aa6ecfaf707fcc3ac0b73f418209.jpg"
    }
    else if(this.state.image == 3){
      url = "https://d3u4hzlr7ozpoo.cloudfront.net/assets/banner-image-things-to-do-a273c8e6efb958ca72e3c439a991f2eb.jpg"
    }
    else
    {
      url = "https://images.thrillophilia.com/image/upload/s--vDn1cffq--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/082/480/original/1464186385_45521wide.jpg.jpg?1464186381"
    }
    let styles = {
      backgroundImage:`url(${url})`,
      height: '620px'
    }
    return (
      <div className="Header" style={styles}>
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
        <div className="whitebg por">
          <div id="1" className="tc vam ht50 whites" onClick = {()=>{this.imageChange(1)}} onMouseEnter={()=>{this.someHandler(1)}}
    onMouseLeave={()=>{this.someOtherHandler(1)}}>Home</div>
          <hr/>
          <div id="2" className="tc vam ht50 whites" onClick = {()=>{this.imageChange(2)}} onMouseEnter={()=>{this.someHandler(2)}}
    onMouseLeave={()=>{this.someOtherHandler(2)}}>76 Things to do in SriLanka</div>
          <hr/>
          <div id="3" className="tc vam ht50 whites" onClick = {()=>{this.imageChange(3)}} onMouseEnter={()=>{this.someHandler(3)}}
    onMouseLeave={()=>{this.someOtherHandler(3)}}>52 SriLanka Tour Packages</div>
          <hr/>
          <div id="4" className="tc vam ht50 whites" onClick = {()=>{this.imageChange(4)}} onMouseEnter={()=>{this.someHandler(4)}}
    onMouseLeave={()=>{this.someOtherHandler(4)}}>2 Places to stay in SriLanka</div>
        </div>
      </div>
    );
  }
}

export default Header;

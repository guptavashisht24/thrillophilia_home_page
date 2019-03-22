import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './tile';
import STile from './static_tiles'
import Basic_tiles from './basic_tiles';


class Recommendations extends Component {
  render() {
    let data = []
    for(let i=0;i<this.props.count;i++){
      if(!this.props.type)
        data.push(<Tile key={i}/>);
      else if(this.props.type == 'static')
        data.push(<STile key={i}/>);
      else if(this.props.type == 'basic')
        data.push(<Basic_tiles key={i}/>);
    }
    return (
      <div className="w90 ml120 mt20">
        <div className="fs22">
            {this.props.head}
        </div>
        {data}
      </div>
    );
  }
}

export default Recommendations;

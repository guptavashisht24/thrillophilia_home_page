import React, { Component } from 'react';
class Suggestions extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        let data = ['SightSeeing in SriLanka', 'Adventure in SriLanka','Attractions in SriLanka','Nature and Wildlife in Srilanka','Boating in SriLanka','Trekking in SriLanka','SightSeeing in SriLanka', 'Adventure in SriLanka','Attractions in SriLanka','Nature and Wildlife in Srilanka','Boating in SriLanka','Trekking in SriLanka','SightSeeing in SriLanka', 'Adventure in SriLanka','Attractions in SriLanka','Nature and Wildlife in Srilanka','Boating in SriLanka','Trekking in SriLanka','SightSeeing in SriLanka', 'Adventure in SriLanka','Attractions in SriLanka','Nature and Wildlife in Srilanka','Boating in SriLanka','Trekking in SriLanka','SightSeeing in SriLanka', 'Adventure in SriLanka','Attractions in SriLanka','Nature and Wildlife in Srilanka','Boating in SriLanka','Trekking in SriLanka']
        let list_items = data.map((data,index)=>{
            return(
                <div className="brd tc mr10 mt10" key={index}>{data}</div>
            )
        })
        return(
            <div className="w80 ma pd50">
                {this.props.head}
            <div className="mt50 ma">
            {list_items}
  </div>
  </div>
        )
    }
}
export default Suggestions;
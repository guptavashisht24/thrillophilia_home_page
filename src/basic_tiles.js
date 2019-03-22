import React, { Component } from 'react';
class Basic_tiles extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
    let inline = {
        color : 'coral',
    }
        return(
            <div className="tiles3 dib mr20 mt10">
                <img height="" width="250px" src="https://images.thrillophilia.com/image/upload/s--eyvjKW_x--/c_fill,f_auto,fl_strip_profile,h_380,q_auto,w_604/v1/images/photos/000/023/550/original/1491645371_Whale-Watching.jpg.jpg?1491645371"></img>
                <div className="heads">101 Basic things to do in SriLanka</div>
                <div className="mt10 greyed fss">
                A small island country in the Indian ocean, experiences and activities entail that there are a lot of things to do in Sri Lanka. From the am......
                </div>
            </div>
        )
    }
}
export default Basic_tiles;
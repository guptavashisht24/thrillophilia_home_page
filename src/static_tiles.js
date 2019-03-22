import React, { Component } from 'react';
class STile extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
    let inline = {
        color : 'coral',
    }
        return(
            <div className="tiles2 dib mr20 mt10">
            <img width="250px" height="190px" src="https://images.thrillophilia.com/image/upload/s--owq0Ok4s--/c_fill,f_auto,fl_strip_profile,h_380,q_auto,w_604/v1/attractions/images/000/000/395/original/21541533241_8fe11c0f98_o.jpg.jpg?1482214548"></img>
            <div id="head">
                Galle green beach
            </div>
            <span className="fss greyed">Situated in the middle of the busy stretch of Galle Road and the Indian Ocean, this open space, established during 1859 on 5 hectares, is a ...</span>
            <div className="w95 h90 bggrey ma">
                <div>
                    Day Safari @ Galle
                </div>
                <div className="mt50">
                    <div className="dib">
                        &#8377;7500
                    </div>
                    <div className="loginBox2">MORE INFO</div>
                </div>
            </div>
            <hr/>
            <span style={inline}>See 2 more trips</span>

            </div>
        )
    }
}
export default STile;
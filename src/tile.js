import React, { Component } from 'react';
class Tile extends Component{
    constructor(props){
        super(props);
        this.state = {
            show_hover : false
        }
        this.someHandler = this.someHandler.bind(this);
        this.someOtherHandler = this.someOtherHandler.bind(this);
    }

    someHandler(){
        console.log('Apples');
        this.setState({
            show_hover : true
        })
    }
    someOtherHandler(){
        this.setState({
            show_hover : false
        })
    }
    render(){
        return(
            <div className="tiles dib mr20 mt10" onMouseEnter={this.someHandler}
    onMouseLeave={this.someOtherHandler}>
                {!this.state.show_hover && <div><div>
                    <img height="300px" width="250px" src="https://images.thrillophilia.com/image/upload/s--hBiRB1z0--/c_fill,f_auto,fl_strip_profile,h_450,q_auto,w_400/v1/images/photos/000/055/403/original/Almost-Captains.jpg.jpg?1458157823"></img>
                </div>
                <div className="greyed">
                Sailing in Bentota in Sri Lanka
                </div>
                <div className="crx pdt40">
                    <div className="fl ml10">
                        &#8377;7500
                        <div className="greyed">
                            &#8377;<strike>8000</strike>
                        </div>
                    </div>
                    
                    <div className="fr mr10">
                    <div>
                        <i className="fa fa-star golden fs"></i>
                        <i className="fa fa-star golden fs"></i>
                        <i className="fa fa-star golden fs"></i>
                        <i className="fa fa-star golden fs"></i>
                        <i className="fa fa-star greyed fs"></i>
                    </div>
                    <div className="greyed">
                        36 reviews
                    </div>
                    </div>
                </div>
    </div>}
        {this.state.show_hover && 
            <div >
                <div className="desc">
                    About the Activity:Climb aboard on your very own chartered boat and cruise through the sea to see the scenery of&nbsp;Bruwela and Bentota.During this three hours journey, starting from 9 AM,&nbsp;while on board, you can relax and revel in a luxurious environment and also learn how to sail.The boat stops at a wonderful cove, where you can take a jump in the waters or go snorkeling and paddle boarding.&nbsp;Explore...
                </div>
                <div className="submit-btn ma">
                    Book Now
                </div>
            </div>
        }
            </div>
        )
    }
}
export default Tile;
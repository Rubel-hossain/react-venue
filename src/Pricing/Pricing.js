import React, { Component } from 'react';
import MyButton from "../Elements/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {

    state = {
        pricings: [100,150,250],
        positions: ["Small","Medium","Star"],
        desc: [
            "Velit lacus donec, proin dolorum dignissimos, consequat laoreet accumsan",
            "Feugiat vestibulum netus ea urna, tempore conubia odit, accumsan, cumque risus",
            "Laboris quae placerat fermentum, arcu anim ipsum molestias vehicula"
        ],
        link_to: ["https://sales/s","https://sales/m","https://sales/l"],
        delay: [500,200,600]
    }

    showBoxes = ()=>{
          
      return  this.state.pricings.map((box,i)=>{
          
           return(
             <Zoom delay={this.state.delay[i]} key={i}> 
               <div className="pricing_item">
                  <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                      <span>${this.state.pricings[i]}</span>
                      <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                       {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                      <MyButton text="Purchase" bgc="#ffa800" color="#fff" link={this.state.link_to[i]} size="large"/>
                    </div>
                  </div>
               </div>
            </Zoom>
           );
        });
    }
  render() {
    return (
       <div className="bck_black">
           <div className="center_wrapper pricing_section">
             <h2>Pricing</h2>
            <div className="pricing_wrapper">
               {this.showBoxes()}
            </div>
           </div>
       </div>
    )
  }
}

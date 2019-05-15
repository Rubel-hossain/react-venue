import React, { Component } from 'react';
import Slide from "react-reveal/Slide";

export default class Countdown extends Component {

    state = {
        DeadLine: "May, 30, 2025",
        Days: "",
        Hours: "",
        Minutes: "",
        Seconds: ""
    }

    getCountdown = (value)=>{
        const time = Date.parse(value) - Date.parse(new Date());
        if(time>0){
            const Seconds = Math.floor((time/1000)%60);
            const Minutes = Math.floor((time/1000/60)%60);
            const Hours = Math.floor((time/1000/60/60)%24);
            const Days = Math.floor(time/(1000*60*60*24));

           

            this.setState({
                Days,
                Hours,
                Minutes,
                Seconds
            });
        }
        

    }

    componentDidMount(){
        setInterval(()=>this.getCountdown(this.state.DeadLine),1000);
    }
  render() {

    const {Days,Hours,Minutes,Seconds} = this.state;

    return (
      
  <Slide left delay={1000}>
    <div className="countdown_wrapper">
       <div className="countdown_top">
         Event Start's In
       </div>
       <div className="countdown_bottom">
         <div className="countdown_item">
           <div className="countdown_time">
             {Days}
           </div>
           <div className="countdown_tag">
             Days
           </div>
         </div>
         <div className="countdown_item">
           <div className="countdown_time">
             {Hours}
           </div>
           <div className="countdown_tag">
             Hs
           </div>
         </div>
         <div className="countdown_item">
           <div className="countdown_time">
             {Minutes}
           </div>
           <div className="countdown_tag">
             Mins
           </div>
         </div>
         <div className="countdown_item">
           <div className="countdown_time">
             {Seconds}
           </div>
           <div className="countdown_tag">
             Sec
           </div>
         </div>
       </div>
      </div>
    </Slide>
      
    )
  }
}

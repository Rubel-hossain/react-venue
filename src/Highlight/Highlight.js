import React from 'react';
import Fade from "react-reveal/Fade";
import MyButton from "../Elements/MyButton";

export default function Highlight() {
  return (
   <div className="highlight_wrapper">
   <Fade> 
     <div className="center_wrapper">
      <h2>Highlight</h2>
      <div className="highlight_description">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ea dolore tempore? Illo officia vero omnis eos hic, ut cupiditate, deserunt odio quis dolorum veritatis, sint eveniet dolore qui quod!</p>
      </div>
     </div>
     </Fade>
     <Fade duration={500} delay={500}> 
     <div className="center_wrapper">
         <div className="discount_wrapper">
             <div className="discount_porcentage">
               <span>25%</span>
               <span>Off</span>
             </div>
             <div className="discount_description">
               <h3>Special Offers Only For July</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem eaque id cum? Totam aspernatur eos repellendus repellat facilis quia eaque. Itaque corporis odio voluptatum accusamus quis possimus quidem optio.</p>
               <MyButton text="Purchages Ticket" size="large" link="https://google.com/" color="#fff" bgc="#ffa800" color="#fff"/>
             </div>
         </div>
     </div>
     </Fade>
   </div>
  )
}

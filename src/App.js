import React from 'react';
import "./resources/styles.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Header from "../src/Header/Header";
import HeaderSlider from "../src/HeaderSlider/HeaderSlider";
import VenuInfo from "../src/VenuInfo/VenuInfo";
import Highlight from "../src/Highlight/Highlight";
import Pricing from "../src/Pricing/Pricing";
import Footer from "../src/Footer/Footer";

import { Element } from "react-scroll";


function App() {
  return (
    <div className="App">
     <Header/>
     <Element name="header_slider">
       <HeaderSlider/>
     </Element>
     <Element name="venu_info">
       <VenuInfo/>
     </Element>
     <Element name="highlight">
       <Highlight/>
     </Element>
     <Element name="pricing">
       <Pricing/>
     </Element>
     <Element name="footer">
       <Footer/>
     </Element>
     
    </div>
  );
}

export default App;

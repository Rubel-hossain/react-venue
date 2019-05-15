import React, {useState, useEffect} from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

export default function  Header()  {
  
    const [DrawOpen,setDrawOpen] = useState(false);
    const [HeaderBgColor,setHeaderBgColor] = useState(false);

    function toggleDrawer(value){
        setDrawOpen(value);
    }
    const handleScroll=()=>{
        
       if(window.scrollY > 200){

         setHeaderBgColor(true);
       }else {
        setHeaderBgColor(false);
       }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
    });



    return (
        
     <AppBar
         position= "fixed"
         style={{
             backgroundColor: HeaderBgColor ? "#ff4800" : "transparent",
             boxShadow: "none",
             padding: "10px 0"
            }}
     >
      <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">Rubel Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
      <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={()=>toggleDrawer(true)}
      >
          <MenuIcon/>
      </IconButton>
       
      <SideDrawer open={DrawOpen} onClose={()=>toggleDrawer(false)}/>
      </Toolbar>
     </AppBar>
    )
  
}

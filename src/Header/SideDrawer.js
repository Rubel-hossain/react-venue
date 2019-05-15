import React from 'react';
import { scroller } from "react-scroll";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

export default function SideDrawer(props) {

    //const {DrawerOpen,setDrawerOpen} = useState(false);
    const {open, onClose } = props;

    const scrollToElement = (element) =>{

      scroller.scrollTo(element, {
        duration: 500,
        delay: 500,
        smooth: true,
        offset: -88
      });

      onClose(false);
    }

  return (
      
     <Drawer 
       anchor ="right"
       open = {open}
       onClose={()=>onClose(false)}
     >
      <List component="nav">
        <ListItem button onClick={()=>scrollToElement("header_slider")}>
            Event Starts In
        </ListItem>
        <ListItem button onClick={()=>scrollToElement("venu_info")}>
            Venu Info
        </ListItem>
        <ListItem button onClick={()=>scrollToElement("highlight")}>
            Heighlights
        </ListItem>
        <ListItem button onClick={()=>scrollToElement("pricing")}>
            Pricing
        </ListItem>
        <ListItem button onClick={()=>scrollToElement("footer")}>
            Locations
        </ListItem>
      </List>
     </Drawer>
  )
}

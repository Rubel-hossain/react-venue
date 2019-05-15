import React from 'react';
import Button from "@material-ui/core/Button";
import TicketIcon from "../../src/resources/images/icons/ticket.png";
import { red } from 'ansi-colors';

export default function MyButton(props) {
  return (
    <Button
      href={props.link}
      varient="contained"
      size={props.size}
      style={{
          backgroundColor: props.bgc,
          color: props.color
      }}>
    <img src={TicketIcon} alt="button icon" className="iconImage"/>
     {props.text}
    </Button>
  )
}

MyButton.defaultProps = {
    link: "#",
    bgc:  "#000",
    color: "#fff",
    text: "Button",
    size: "small"
}
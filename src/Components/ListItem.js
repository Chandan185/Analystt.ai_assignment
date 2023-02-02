import React from "react";
import { useState } from "react";
import Modal from "./Modal/Modal";
import classes from "./ListItem.module.css";
function ListItem(props) {
  const [display, setdisplay] = useState(false);
  const showdetailshandler = (id) => {
    setdisplay(!display);
  };
  return (
    <div className={classes.double}>
      <Modal
        key={props.id}
        id={props.id}
        name={props.name}
        username={props.username}
        email={props.email}
        address={props.address}
        phone={props.phone}
        website={props.website}
        company={props.company}
        onClick={showdetailshandler}
        show={display}
      ></Modal>
    </div>
  );
}
export default ListItem;

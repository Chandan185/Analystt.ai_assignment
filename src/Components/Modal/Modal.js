import React from "react";
import classes from "./modal.module.css";
const Modal = (props) => {
  return (
    <div className={classes.overall}>
      <div className={classes.listitem}>
        <div className={classes.item}>
          <p className={classes.heading}>Name</p>
          <p>{props.name}</p>
        </div>
        <div className={classes.item}>
          <p className={classes.heading}>Website</p>
          <p>{props.website}</p>
        </div>
        <div className={classes.item}>
          <p className={classes.heading}>Email</p>
          <p>{props.email}</p>
        </div>
        <div className={classes.item}>
          <button className={classes.button} onClick={props.onClick}>
            {props.show ? "hide details" : "show details"}
          </button>
        </div>
      </div>
      {props.show && (
        <div className={classes.showdetails}>
          <div className={classes.description}>
            <p>Description</p>
          </div>
          <div className={classes.details}>
            <div className={classes.left}>
              <p>
                <span className={classes.itemdetail}>Username:</span>
                {props.username}
              </p>
              <p>
                <span className={classes.itemdetail}>Address:</span>
                {props.address.street +
                  " ," +
                  props.address.suite +
                  " ," +
                  props.address.city +
                  ", " +
                  props.address.zipcode}
              </p>
              <p>
                <span className={classes.itemdetail}>Contact:</span>
                {props.phone}
              </p>
            </div>
            <div className={classes.right}>
              <p className={classes.itemdetail}>Company:</p>
              <p>
                <span className={classes.itemdetail}>Name:</span>
                {props.company.name}
              </p>
              <p>
                <span className={classes.itemdetail}>Website:</span>
                {props.website}
              </p>
              <p className={classes.itemdetail}>About:</p>
              <p>{props.company.catchPhrase}</p>
              <p>{props.company.bs}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

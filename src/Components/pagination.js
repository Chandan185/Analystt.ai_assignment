import React from "react";
import classes from "./pagination.module.css";
const Pagination = (props) => {
  let pages = [];
  let p = Math.ceil(props.totalitems / props.itemsperpage);
  for (let i = 1; i <= p; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => props.setcurrentpage(page)}
            className={props.currentpage === page ? `${classes.active}` : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;

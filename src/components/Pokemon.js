import React from "react";
import classes from "./Pokemon.module.css";

const Pokemon = (props) => {
  return (
    <li className={classes.pokemon}>
      <h2>{props.name}</h2>
    </li>
  );
};

export default Pokemon;

import React from "react";
import MealItemForm from "../MealItemForm/MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = ({ name, description, price }) => {
  const formattedPrice = `$${price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;

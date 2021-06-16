import React, { useContext } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";

import classes from "./MealItem.module.css";
import CartContext from "./../../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;

import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "./../../Cart/CartIcon/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

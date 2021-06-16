import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "./../../Cart/CartIcon/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHilighted, setButtonIsHilighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnIsHilighted ? classes.bump : ""}`;
  const { items } = cartCtx;
  useEffect(() => {
    console.log("ddddddddddddd");
    if (cartCtx.items.length === 0) {
      return;
    }

    setButtonIsHilighted(true);

    const timer = setTimeout(() => {
      setButtonIsHilighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

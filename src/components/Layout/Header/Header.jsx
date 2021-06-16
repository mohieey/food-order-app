import React, { Fragment } from "react";

import mealsImg from "../../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DELCI Food</h1>
        <HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="An image of meals" />
      </div>
    </Fragment>
  );
};

export default Header;

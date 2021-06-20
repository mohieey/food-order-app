import React, { useContext, useState, useEffect } from "react";

import classes from "./Cart.module.css";
import Modal from "./../../UI/Modal/Modal";
import CartContext from "./../../../store/cart-context";
import CartItem from "./../CartItem/CartItem";
import Checkout from "./../Checkout/Checkout";
import { ordersEndpoint } from "../../../urls";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    fetch(ordersEndpoint, {
      method: "POST",
      body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
    }).then((response) => {
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    });
  };

  const isSubmittingContent = <p>Sending order data....</p>;
  const didSubmitContent = (
    <React.Fragment>
      <p>Order placed successfully</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirmOrder={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );
  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;

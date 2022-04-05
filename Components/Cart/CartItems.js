import React from "react";
import "./CartItems.css";
const CartItems = (props) => {
  const imgsrc = props.img;
  return (
    <div className="cart-items">
      <div className="cartitems-row">
        <span className="cart-item cart-column">
        <img src={imgsrc} alt="products" className="img" />{props.item}</span>
        <span className="cart-price cart-column">{props.price}</span>
        <span className="cart-quantity cart-column">{props.quantity}
        <input type="text" className="" value="1" />
        <button className="remove-button">Remove</button></span> 
      </div>
    </div>
  );
};

export default CartItems;

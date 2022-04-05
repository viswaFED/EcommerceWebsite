import React, { Fragment } from "react";
import CartItems from "./CartItems";
import "./Cart.css";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  const Cartlist = cartElements.map((List) => (
    <CartItems
      item={List.title}
      img={List.imageUrl}
      price={List.price}
      amount={List.quantity}
    />
  ));

  return (
    <Fragment>
      <div className="cart">
        <h3 className="cartName">Cart</h3>
        <button className="cart__Button" onClick={props.onClick}>
          X
        </button>
        <div className="cart-row cart-header">
          <span class="cart-item cart-column">ITEM</span>
          <span class="cart-price cart-column">PRICE</span>
          <span class="cart-quantity cart-column">QUANTITY</span>
        </div>
        <div>{Cartlist}</div>
        <div class="cart-total">
          <span>
            <span class="total-title">
              {" "}
              <strong>Total</strong>
            </span>
            $<span id="total-value">0</span>
          </span>
        </div>
        <button class="purchase-btn" type="button">
          PURCHASE
        </button>
      </div>
    </Fragment>
  );
};

export default Cart;

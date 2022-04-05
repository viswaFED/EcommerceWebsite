import React,{ Fragment } from "react";

const ProductList = (props) => {
  const imgsrc = props.img;
  return (
    <Fragment>
      <ul>
        <div className="product__title">
          <h4> {props.title} </h4>
        </div>
        <div  className="image__container">
          <img src={imgsrc} alt="products" />
        </div>
        <div className="product__price">
          <h4 className="product__price__text">Rs.{props.price}</h4>
          <button className="Product__button">ADD TO CART</button>
        </div>
      </ul>
    </Fragment>
  );
};

export default ProductList;

import React, { Fragment } from "react";
import ProductList from "./ProductList";
import "./Product.css"

const productsArr = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  
];

const AvaiableProducts =()=>{
  const productsList= productsArr.map(product=>(
    <ProductList
    id={product.id}
    key= {product.id}
    title= {product.title}
    img={product.imageUrl}
    price={product.price}
    />
  ))

return(<Fragment>
    <div>
    <h3 className="product">Music</h3>
       <ul className="Product__container">{productsList}</ul>
    </div>
</Fragment>
)}

export default AvaiableProducts;


import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = props => {
  const { handleAddToCart } = props;
  const { name, img, price, seller, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p>price: ${price}</p>
        <h4>Seller {seller}</h4>
        <h4>Ratings {ratings}</h4>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="cart-btn"
      >
        <p className="btn-text">add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./product-detail.css";
import { BeatLoader } from "react-spinners";
import CartContext from "../context/CartContext";

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const getProductDetails = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProductDetails(res.data);
    setLoading(false);
  };

  const { setCartItems, cartItems } = useContext(CartContext);

  const handleAddToCart = () => {

    const selectedItem =
      cartItems &&
      cartItems.find((product) => product.id === productDetails.id);

    if (selectedItem) {
      return;
    }

    const _cartItems = [...cartItems, { ...productDetails, quantity: 1 }];

    setCartItems(_cartItems);
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div className="detail-main">
      {loading ? (
        <BeatLoader id="loader" color="#36d7b7" />
      ) : (
        <>
          <div className="detail-image">
            <img src={productDetails?.image} alt={productDetails?.title} />
          </div>
          <div className="product-detail">
            <div className="product-title">{productDetails?.title}</div>
            <div className="product-category">
              Category: {productDetails?.category}
            </div>
            <div className="product-description">
              {productDetails?.description}
            </div>
            <div className="product-price">Rs.{productDetails?.price}</div>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

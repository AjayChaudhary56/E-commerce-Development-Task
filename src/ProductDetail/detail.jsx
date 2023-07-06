import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detail.css";
import { BeatLoader } from "react-spinners";

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const [myData, setMyData] = useState([]);
  const getProductDetails = async () => {
    setLoading(true)
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setMyData(res.data);
    setLoading(false)
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
            <img src={myData?.image} alt={myData?.title} />
          </div>
          <div className="product-detail">
            <div className="product-title">{myData?.title}</div>
            <div className="product-category">Category: {myData?.category}</div>
            <div className="product-description">{myData?.description}</div>
            <div className="product-price">Rs.{myData?.price}</div>
            <button>Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

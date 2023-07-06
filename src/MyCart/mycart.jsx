import React from "react";
import Item from "../Item/item";
import './mycart.css'
import Scrollbars from "react-custom-scrollbars-2";
const MyCart = () => {
  return (
    <div className="cart-main">
      <div className="cart-title">Shopping Cart</div>
      <div className="cart-count">You have 4 items in cart</div>
    
      <div className="cart-items">
        <Scrollbars > 
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        </Scrollbars>
      </div>
     <div className="total">
     <b>Total:</b>  Rs.10987653
     </div>
    </div>
  );
};

export default MyCart;

import React, { useContext } from "react";
import "./cart-item.css";
import CartContext from "../context/CartContext";

const CartItem = ({ productId, title, price, image, quantity }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleMinus = () => {
    if (quantity === 1) {
      return
    }
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      setCartItems(updatedCartItems);
  };

  const handlePlus = () => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = () => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id !== productId
    );
    setCartItems(filteredCartItems);
  };

  return (
    <div className="bars">
      <div className="item-main">
        <div className="item-image">
          <img src={image} alt={title} />
        </div>
        <div className="item-title">
          <h3>{title}</h3>
        </div>

        <div className="quantity">
          <i className="fa-solid fa-minus minus" onClick={handleMinus} min={1}></i>
          <input type="number" value={quantity} readOnly />
          <i className="fa-solid fa-plus plus" onClick={handlePlus}></i>
        </div>
        <div className="item-price">Rs.{price}</div>
        <button className="remove-item" onClick={handleRemoveFromCart}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default CartItem;

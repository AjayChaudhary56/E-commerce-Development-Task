import React, { useContext, useMemo } from "react";
import CartItem from "../CartItem/CartItem";
import "./cart.css";
import Scrollbars from "react-custom-scrollbars-2";
import CartContext from "../context/CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
    }
    return total;
  }, [cartItems]);

  return (
    <div className="cart-main">
      <div className="cart-title">Shopping Cart</div>
      <div className="cart-count">
        You have {cartItems && cartItems.length} items in cart
      </div>
      <div className="total">
        {totalPrice ? (
          <>
            <b>Total:</b> Rs.{totalPrice.toFixed(2)}
          </>
        ) : (
          "Rs. 0"
        )}
      </div>
      <div className="cart-items">
        <Scrollbars>
          {cartItems && Array.isArray(cartItems) && cartItems.length > 0
            ? cartItems.map((cartDetails) => (
                <CartItem
                  key={cartDetails?.id}
                  title={cartDetails?.title}
                  image={cartDetails?.image}
                  productId={cartDetails?.id}
                  price={cartDetails?.price}
                  quantity={cartDetails?.quantity}
                />
              ))
            : "Cart is empty"}
        </Scrollbars>
      </div>
     
    </div>
  );
};

export default Cart;

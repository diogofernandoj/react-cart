import { useSelector } from "react-redux";

import CartItem from "../cart-item";

import "./styles.css";

const Cart = ({ cartVisible, setCartVisible }) => {
  const cartItems = useSelector((state) => state.cart.products);
  const cartTotalPrice = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  const handleCartClick = (className) => {
    if (className.includes("cart-container")) {
      setCartVisible(false);
    }
  };

  return (
    <div className={`cart-container ${!!cartVisible && "active"}`} onClick={(e) => handleCartClick(e.target.className)}>
      <div className="cart">
        <h2>Seu carrinho</h2>
        <i className="fa-solid fa-xmark" onClick={() => setCartVisible(false)}></i>
        <div className="cart-items">
          {cartItems.map((itemInfo) => (
            <CartItem itemInfo={itemInfo} />
          ))}
        </div>
        {cartTotalPrice > 0 ? (
          <div className="total-price">Total: R${cartTotalPrice}</div>
        ) : (
          <div className="empty-cart">O seu carrinho está vazio!</div>
        )}
      </div>
    </div>
  );
};

export default Cart;

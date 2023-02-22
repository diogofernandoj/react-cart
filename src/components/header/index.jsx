import { useState } from "react";
import { useSelector } from "react-redux";

import Cart from "../cart";

import "./style.css";

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const cartItemsCount = useSelector((state) => state.cart.products.reduce((acc, curr) => acc + curr.quantity, 0));

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          Jota<span>Store</span>
        </div>
        <span className="cart-button" onClick={() => setCartVisible(true)}>
          Carrinho ({cartItemsCount})
        </span>
      </div>
      {!!cartVisible && <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />}
    </div>
  );
};

export default Header;
